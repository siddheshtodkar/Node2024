import path from 'path'
import url from 'url'
const filePath = "./dir1/dir2/test.txt"

console.log(path.basename(filePath))
// test.txt

console.log(path.dirname(filePath))
// ./dir1/dir2

console.log(path.extname(filePath))
// .txt

console.log(path.parse(filePath))
// {
//     "root": '',
//     "dir": './dir1/dir2',
//     "base": 'test.txt',
//     "ext": '.txt',
//     'name': 'test'
// }

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname, __filename)
// C:\projects\Nodejs\traversy2024  C:\projects\Nodejs\traversy2024\pathDemo.js

const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt')
console.log(filePath2)
// C:\projects\Nodejs\traversy2024\dir1\dir2\test.txt

const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt')
console.log(filePath3)
// C:\projects\Nodejs\traversy2024\dir1\dir2\test.txt
