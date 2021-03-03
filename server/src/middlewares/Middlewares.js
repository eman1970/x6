import dotenv from 'dotenv'
import StatusCode from '../../configurations/StatusCode.js'

dotenv.config()
const {ENVIROMENT} = process.env

const errorHandler = (error, request, response, next) => {
    const statuscode = response.statusCode === 200 ? 500 : response.statusCode
    response.status(statuscode)
    response.json({
        statuscode: statuscode,
        message: error.message,
        stackTrace: ENVIROMENT === 'PRODUCTION' ? null : error.stack
    })
}

const notFound = (request, response, next) => {
    const error = new Error('Invalid URL - NOT FOUND' + request.originalUrl)
    response.status(StatusCode.NOT_FOUND)
    next(error)
}

export default {
    notFound,
    errorHandler
}