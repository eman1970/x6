import express from 'express'
import helmet from 'helmet'
import mongoose from 'mongoose'
import morgan from 'morgan'

const app = express()
app.use(helmet())
app.use(morgan('common'))

const checkIfAdmin = (request, response, next) => {
    console.log(request.query.username)
    next()
}

app.use(checkIfAdmin)

app.listen(3001, () => {
    console.log('Servern är igång på port' + 3001)


})


app.get('/recipe', (request, response) => {
    response.send('Ditt API-anrop gick igenom!')

})

app.get('/throwdice', checkIfAdmin, (request, response) => {
    response.send(Math.random().toString())

})

mongoose.connect('mongodb://localhost/namndb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully connected to the database'))
    .catch((error) => {
        console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE: ' + error)
        process.exit()
    })