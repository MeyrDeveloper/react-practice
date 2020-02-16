export const composeUtils = (...args) => 
    (data) => args.reduce((composed, f) => {
        return f(composed)
    })