require("babel-core/register")

const Koa = require('koa')
const app = new Koa()

//Initializing app routes
require('./routes/reactor')(app)

//Initializing static serving
require('./core/static')(app)

app.listen(3000)

console.log("App running on port 3000")
