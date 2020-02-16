import React from 'react'
import express from 'express'
import {renderToString} from 'react-dom/server'
import data from '../data/Recipe.json'
import Menu from '../components/Recipes/Menu.jsx'

global.React = React

const html = renderToString(<Menu recipes={data} />)

const logger = (req, res, next) => {
    console.log(`${req.method} request form ${req.url}`)
    next()
}

const sendHTMLPage = (req, res) => {
    return res.status(200).send(`
        <!DOCTYPE html>
            <html>
                <head>
                    <title>React Recipe App</title>
                </head>
                <body>
                    <div id="react-container">${html}</div>
                </body>
                <script>
                    window.__DATA__=${JSON.stringify(data)}
                </script>
                <script src="bundle.js">

                </script>
            </html>
    `)
}

const app = express()
                .use(logger)
                .use(express.static('./assets'))
                .use(sendHTMLPage)

app.listen(3000, () => console.log(`Recipe app running at 'http://localhost:3000'`))