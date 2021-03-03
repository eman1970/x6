import UserController from '../controllers/User.controller.js'

const routes = (app) => {
    app.post('/user', UserController.createUser)
    app.get('/user', UserController.getAllUsers)
    /* app.delete('/del', UserController.deleteUser) */
    app.delete('/user/:userId', UserController.deleteUser)

}

export default { routes }