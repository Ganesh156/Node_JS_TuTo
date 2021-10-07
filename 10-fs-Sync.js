const {readFileSync,writeFileSync} = require('fs')

console.log('Start')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second)

writeFileSync('./content/result-sync.txt',
`hello this is result : ${first},${second}`,{flag:'a'}
)

console.log('Done with firt')
console.log('Starting Second')



