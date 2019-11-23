import Dispatcher from 'flux'

class CountdownDispatcher extends Dispatcher {
    handleAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action
        })
    }
}

export default CountdownDispatcher