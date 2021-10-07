const {readFile,writeFile} = require('fs')

// Reading file and Writing file
console.log('Start')
readFile('./content/first.txt','utf8',(err,result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf8',(err,result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result.txt',`hello this is result : ${first},${second}`,
        (err,result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('Done with this task')
        })
    })
})

console.log('Starting with next one...')