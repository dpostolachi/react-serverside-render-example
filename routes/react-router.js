import React from 'react'

import { StaticRouter } from 'react-router'

import { renderToString } from 'react-dom/server'

import routes from './routes'

import AppRouter from './app-router'

const router = require('koa-router')()

import getStore from '../store/get'

module.exports = (app)=>{

    const promises = [] //Array of promises for loading data before rendering

    routes.forEach((route)=>{

        router.get(route.path, async (ctx)=>{

            const context = {}

            const Store = getStore()

            await Promise.all(promises.concat(route.loadData(ctx, context, Store))) // Pushing route specific promises

            const html = '<!DOCTYPE html>' + renderToString(<StaticRouter location={ ctx.url } context={context}><AppRouter Store={ Store }/></StaticRouter>)

            ctx.body = html

        })

    })

    app.use(router.routes())

}
