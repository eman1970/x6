import { response } from 'express'
import UserModel from '../models/User.model.js'

const createUser = async (request, response) => {

    const user = new UserModel({
        userName: request.body.username,
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

const getAllUsers = async (request, response) => {
    try {
        const databaseResponse = await UserModel.find()
        response.status(200).send(databaseResponse)
    } catch (error) {
        response.status(500).send({ message: error.message })

    }
}

/* const deleteUser = async (request, response) => {
    const user = request.body.username
    try {
        const databaseResponse = await UserModel.deleteOne({ userName: user })
        response.status(200).send(databaseResponse)
    } catch (error) {
        response.status(500).send({
            message: error.message
        })
    }
} */

const deleteUser = async (request, response) => {
    try {
        const userId = request.params.userId
        const databaseResponse = await UserModel.findByIdAndDelete(userId)
        response.status(200).send({ message: 'Successfully deleted user', data: databaseResponse })
    } catch (error) {
        response.status(500).send({
            message: `Error while trying to delete user with ID ${userId}`,
            error: error.message
        })
    }
}

const updateUser = async (request, response) => {
    const userId = request.params.userId
    const data = {
        userName: request.body.username,
        password: request.body.password
    }
    try {
        const databaseResponse = await UserModel.findByIdAndUpdate(userId, data, { new: true })
        response.status(200).send(databaseResponse)
    } catch (error) {
        response.status(500).send({
            message: `Error while trying to update user with ID ${userId}`,
            error: error.message
        })

    }


}


const queryUsername = async (request, response) => {
    try {
        const databaseResponse = await UserModel.find({ userName: request.query.username })
        response.status(200).send(databaseResponse)
    } catch (error) {
        response.status(500).send({
            message: `Error occured while trying to retrieve username: ${request.query.username} `,
            error: error.message
        })

    }

}

const getUserByID = async (request, response) => {
    try {
        const databaseResponse = await UserModel.findById({ _id: request.query.id })
        response.status(200).send(databaseResponse)
    } catch (error) {
        response.status(500).send({
            message: `Error occured while trying to retrieve user with the ID: ${request.params.userId}`,
            error: error.message
        })
    }

}
export default {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
    queryUsername,
    getUserByID
}