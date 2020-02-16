import express from 'express'
import path from 'path'
import fs from 'fs'
import storeFactory from '../store/index'
import initialState from '../data/initialState'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import {compose} from 'redux'
import {StaticRouter} from 'react-router-dom'
import App from '../components/Colors'
import {composeUtils} from '../utils'

const serverStore = storeFactory(true, initialState)

serverStore.subscribe(() => {
    return fs.writeFile(
        path.join(__dirname, '../../data/initialState.json'),
        JSON.stringify(serverStore.getState()),
        error => (error) ? 
                    console.log('error saving state!', error) : null
    )
})

const addToStorePipeline = (req, res, next) => {
    req.store = serverStore
    next()
}

const makeClientsFrom = store => url =>
        ({
            store: storeFactory(false, store.getState()),
            url
        })

const renderComponentsToHTML = ({url, store}) => ({
    state: store.getState(),
    html: renderToString(
        <Provider store={store}>
            <StaticRouter location={url} context={{}}>
                <App />
            </StaticRouter>
        </Provider>
    )
})

const buildHTMLPage = ({state, html}) => (
    `
        <html>
            <head>
                <meta charset="utf-8">
                <title>Universal Color Organaizer</title>
            </head>
            <body>
                <div id="react">
                    ${html}                   
                </div>
                <script>
                    window.__INITIAL_STATE__ = ${JSON.stringify(state)}
                </script>
                <script src="bundle.js">
                </script>
            </body>
        </html>
    `
)

let htmlResponse = compose(
    buildHTMLPage,
    renderComponentsToHTML,
    makeClientsFrom(serverStore)
)

const fileAssets = express.static(
    path.join(__dirname, '../../dist/assets')
)

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

const respond = (req, res) => {
    return res.status(200).send(htmlResponse(req.url))
}

export default express()
                .use(logger)
                .use(fileAssets)
                .use(addToStorePipeline)
                .use(respond)