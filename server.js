    const express = require("express")
    const app = express();
    const expressLayouts = require("express-ejs-layouts")
    const mongoose = require('mongoose')
    const bodyParser = require ('body-parser')

    //Router Requirements / module Import
    const indexRouter = require('./routes/index')
    const authorRouter = require('./routes/authors')
    const bookRouter = require('./routes/books')

    require('dotenv/config')

    //Templet Engine
    app.set('view engine', 'ejs')
    app.set('views', __dirname + '/views')
    app.set('layout', 'layouts/layout')
    app.use(expressLayouts)
    app.use(express.static('public'))
    app.use(bodyParser.urlencoded ({limit:'10mb', extended:false }))

    mongoose.set('useNewUrlParser', true)
    mongoose.set('useUnifiedTopology', true)
    //Mongo DB Connection Reference
    mongoose.connect(process.env.DATABASE_URL, (err)=>{
        if(err){
            console.log('Mongo DB Connected Error!')
        }else {
            console.log('Mongo DB Connection Succesfully!');
        }
    })
    //Use The Router
    app.use('/', indexRouter)
    app.use('/authors', authorRouter)
    app.use('/books', bookRouter)
    //Connection of port
    app.listen(process.env.PORT || 3000)