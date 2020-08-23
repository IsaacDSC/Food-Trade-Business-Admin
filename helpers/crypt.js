const fs = require('fs')
const crypto = require('crypto')


const alg = 'aes-256-ctr'
const pwd = 'secret'

const read = fs.createReadStream('senha.txt')
const write = fs.createWriteStream('')
const cipher = crypto.createCipher(alg, pwd)

read.pipe(cipher).pipe(write)