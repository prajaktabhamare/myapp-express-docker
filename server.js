const express = require('express')
const bodyParser = require('body-parser')
const routerProduct = require('./routes/product')

const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json())
app.use('/product',routerProduct)

app.get('/',(Request,Response) => {
    Response.send('Welcome to my backend')
})

app.listen(4444,'0.0.0.0', () => {
    console.log('server started on port 4444')
})
