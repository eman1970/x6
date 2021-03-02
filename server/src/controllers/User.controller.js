import UserModel from '../models/User.model.js'

const createUser = async (request, response) => {

    const user = new UserModel({
        userName: request.body.userName,
        password: request.body.password,
        age: request.body.age


    })


    try {
        const databaseResponse = await user.save()
        response.status(201).send(databaseResponse)

    } catch (error) {
        response.status(500).send({
            message: 'Error while trying to create user',
            stack: error
        })
            
            
    }

}

export default {
    createUser
}