const express = require('express')
const app = express();
const path = require('path')

// const indexRoute = require('./routes/index')

//* settings
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')


//* middlewares


//* routes
/*app.get('/', (req, res) => {
    // res.sendFile('D://Documents/nodeProjects/node-firstWebsite/src/')
    // console.log(__dirname + '/views/index.html')
    // console.log(path.join(__dirname, 'views/index.html'))
    // res.sendFile(path.join(__dirname, 'views/index.ejs')) /* Archivo HTML
    res.render('index', {title: 'First Website'})
})*/

// app.use(indexRoute)

app.use(require('./routes/'))


//* STATIC FILES


//* LISTENING THE SERVER
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})


// console.log('Server Listening!')

