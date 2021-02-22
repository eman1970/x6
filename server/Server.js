import express from 'express'

const app = express()

app.listen(3001, () => {
    console.log('Servern är igång på port' +3001)


})


app.get('/recipe', (request, response) => {
    response.send('Ditt API-anrop gick igenom!')

})

app.get('/throwdice', (request, response) => {
    response.send(Math.random().toString())

})
