function promiseChain(num:number){
    return Promise.resolve(num)
        .then(num=> num*num)
        .then(num => num*2)
        .then(num => num+5)
}

export default promiseChain