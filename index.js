require("babel-register")({
    cache: false
})
require("babel-polyfill")

const Koa = require('koa')
const app = new Koa()


//Initializing static serving
require('./core/static.js')(app)

//Initializing app routes
require('./routes/react-router')(app)

app.listen(3000)

console.log("App running on port 3000")
