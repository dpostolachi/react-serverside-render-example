require("babel-core/register")

const Koa = require('koa')
const app = new Koa()

require('./routes/reactor')(app)

app.listen(3000)

console.log("App running on port 3000")
