import express, { application } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import Configurations from './configurations/Configurations.js'
import Middlewares from './src/middlewares/Middlewares.js'
/* import mongoose from 'mongoose' */
 

const app = express()
app.use(helmet())
app.use(morgan('common'))

const checkIfAdmin = (request, response, next) => {
    console.log(request.query.username)
    next()
}

app.use(checkIfAdmin)



app.get('/recipe', (request, response) => {
    response.send('Ditt API-anrop gick igenom!')

})

app.get('/throwdice', checkIfAdmin, (request, response) => {
    response.send(Math.random().toString())

})


app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

Configurations.connectToDatabase()
Configurations.connectToPort(app)





    
