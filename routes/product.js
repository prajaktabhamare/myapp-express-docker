const express = require('express')
const db = require('../db')
const utils = require('../utils')

const router = express.Router()

router.get('/',(Request,Response)=>{
    const connection = db.connect()
    const statement = 'select id,title,description,price from product'
    connection.query(statement,(error,data) => {
        connection.end()
        Response.send(utils.createResult(error,data))
    })
})

router.post('/',(Request,Response)=>{
    const {title,description,price} = Request.body
    const connection = db.connect()
    const statement = `insert into product (title,description,price) values ('${title}','${description}',${price})`
    connection.query(statement,(error,data) => {
        connection.end()
        Response.send(utils.createResult(error,data))
    })
})

module.exports = router