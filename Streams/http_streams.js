var http = require('http')
var fs = require('fs')

http
    .createServer(function (req, res) {

        const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
        //reading data from big file
        fileStream.on('open', () => {
            //sending data to server in chunks
            fileStream.pipe(res)
        })
        fileStream.on('error', (error) => {
            res.end(error)
        })
    })
    .listen(5000)