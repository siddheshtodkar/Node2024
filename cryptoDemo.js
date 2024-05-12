import crypto from 'crypto'

const hash = crypto.createHash('SHA256')
hash.update('abc@1234')
console.log(hash.digest('hex'))
// 83a0fe6c403bd52d21a9fed998f48c7a4cd87d59dd92df2d678ad6d7a08f1f8f

console.log(crypto.randomBytes(16).toString('hex'))
// 85cdd4753549d5c1a27d1e918de1186c

const algorithm = 'aes-256-cbc'
const iv = crypto.randomBytes(16)
const key = crypto.randomBytes(32)

// Encryption
const cipher = crypto.createCipheriv(algorithm, key, iv)
let encrypted = cipher.update('abc@1234', 'utf8', 'hex')
encrypted += cipher.final('hex')
console.log(encrypted)
// 7e2cbab1080089923dc860d4d2ace6ee

// Decryption
const decipher = crypto.createDecipheriv(algorithm, key, iv)
let decrypted = decipher.update(encrypted, 'hex', 'utf8')
decrypted += decipher.final('utf8')
console.log(decrypted)
// abc@1234