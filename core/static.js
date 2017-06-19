const mount = require('koa-mount')

const serve = require('koa-static')

module.exports = (app)=>{

    app.use(mount('/public', serve( 'public' )))

}
