import express from 'express'
import session from 'express-session'
import dotenv from 'dotenv'
import next from 'next'
import compression from 'compression'
import bodyParser from 'body-parser'
import errorHandler from 'errorhandler'
// import logger from 'morgan'
import cors from 'cors'

/**
 * Controllers (route handlers).
 */
import commonCtrl from './controllers/common'

/**
 * Load environment
 */
dotenv.load({
    path: `server/.env.${process.env.NODE_ENV || `development`}`,
})

/**
 * Create Express server.
 */
const app = express()
app.set('port', process.env.PORT || 4343)
const sessionMiddleware = session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SECRET_KEY,
})
app.use(sessionMiddleware)
app.use(compression())
// app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(commonCtrl.initialRequest)
app.options('*', cors()) // Enable cross origin

app.get('/locale', (req,res) => {
    req.locale = req.query.lang
})

const nextApp = next({dev: process.env.NODE_ENV === 'development'})
const nextAppHandle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
    app.get('*', (req, res) => nextAppHandle(req, res))
})

/**
 * Error Handler.
 */
app.use(errorHandler())
app.use((err, req, res, next) => {
    if (err.code === 'EBADCSRFTOKEN') {
        res.status(403)
        return nextApp.render(req, res, '/errors/403')
    }
    return next(err)
})

/**
 * Start Express server.
 */

const server = require('http').Server(app)

server.listen(app.get('port'), () => {
    console.log(
        '%s App is running at http://localhost:%d in %s mode',
        app.get('port'),
        app.get('env'),
    )
    console.log('  Press CTRL-C to stop\n')
})
