import url from 'url'

const urlString = 'https://www.google.com/search?q=hello+world'

const urlObj = new URL(urlString)
console.log(urlObj)
// {
//     href: 'https://www.google.com/search?q=hello+world',
//     origin: 'https://www.google.com',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'www.google.com',
//     hostname: 'www.google.com',
//     port: '',
//     pathname: '/search',
//     search: '?q=hello+world',
//     searchParams: URLSearchParams { 'q' => 'hello world' },
//     hash: ''
// }

console.log(url.format(urlObj))
// https://www.google.com/search?q=hello+world

console.log(import.meta)
// {
//     url: 'file:///C:/projects/Nodejs/traversy2024/urlDemo.js'
// }

console.log(url.fileURLToPath(import.meta.url))
// C:\projects\Nodejs\traversy2024\urlDemo.js

const params = new URLSearchParams(urlObj.search)
console.log(params)
// URLSearchParams { 'q' => 'hello world' }

console.log(params.get('q'))
// hello world
params.append('limit', '5')
console.log(params)
// URLSearchParams { 'q' => 'hello world', 'limit' => '5' }
params.delete('limit')