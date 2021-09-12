const express = require("express")
const app = express();
const expressLayouts = require("express-ejs-layouts")
const indexRouter = require('./routes/index')
const mongoose = require('mongoose')
require('dotenv/config')

app.set('view engine', 'ejs')
app.set('views', __dirname +'/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)

mongoose.connect(process.env.DATABASE_URL, (err)=>{
     if(err){
        console.log('Mongo DB Connected Error!')
    }else {
        console.log('Mongo DB Connection Succesfully!');
    }
})


app.get('/',indexRouter)

app.listen(process.env.PORT || 3000)