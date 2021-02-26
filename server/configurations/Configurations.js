import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const { DATABASE_URL, PORT } = process.env

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DATABASE_URL, {
            useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
        })
        console.log('SUCCESSFULLY CONNECTED TO DATABASE....')
    } catch (error) {
        console.log('ERROR OCCURED WHILE TRYING TO CONNECT TO THE DATABASE')
        process.exit()
    }
}

const connectToPort = (app) => {
    app.listen(PORT, () => {
        console.log('SERVER IS RUNNING ON PORT: ' + PORT)
    })
}




export default {
    connectToDatabase,
    connectToPort
}

/* mongoose.connect('mongodb://localhost/namndb', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() console.log('SUCCESSFULLY CONNECTED TO THE DATABASE')).catch((error) => {
        console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE: ' + error)
        process.exit()

    })

app.listen(300, () => {
    console.log('Servern är igång på port ' + 3001)
}) */