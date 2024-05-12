function hello() {
    console.log('hello')
}

function name() {
    console.log('name')
}

//commonjs
// module.exports = { hello, name }

//es modules
export default name
export { hello }