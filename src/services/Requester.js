const getFakeMembers = count => new Promise((resolve, reject) => {
    const api = `https://jsonplaceholder.typicode.com/posts?userId=1`
    const request = new XMLHttpRequest()
    request.open('GET', api)
    request.onload = () => {
        if(request.status == 200) {
            console.log(JSON.parse(request.response))
            resolve(JSON.parse(request.response))
        } else {
            reject(Error(request.statusText))
        }
    }
    request.onerror = err => reject(err)
    request.send()
})

export {
    getFakeMembers
}