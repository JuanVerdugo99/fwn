const express = require('express')
const app = express();
const path = require('path')

//* SETTINGS
app.set('port', 3000)


//* MIDDLEWARES


//* ROUTES
app.get('/', (req, res) => {
    // res.sendFile('D://Documents/nodeProjects/node-firstWebsite/src/')
    // console.log(__dirname + '/views/index.html')
    console.log(path.join(__dirname, 'views/index.html'))
    res.sendFile(path.join(__dirname, 'views/index.html'))
})


//* STATIC FILES


//* LISTENING THE SERVER
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})


// console.log('Server Listening!')

