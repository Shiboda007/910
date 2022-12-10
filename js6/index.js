let assigned = Object.assign({},)
let key = Object.keys()
let value = Object.values()
let arrAssigned = [].concat()

let types = {
    string: [],
    number: [],
    object: [],
    boolean: []
}
arrAssigned.filter(item => {
    if (typeof(item) === 'string') {
        types.string.push(item)
    } else if (typeof(item) === 'number') {
        types.number.push(item)
    } else if (typeof(item) === 'object') {
        types.object.push(item)
    } else {
        types.boolean.push(item)
    }
})
console.log(types);