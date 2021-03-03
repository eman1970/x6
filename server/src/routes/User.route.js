import UserController from '../controllers/User.controller.js'

const routes = (app) => {
    app.post('/user', UserController.createUser)
    app.get('/user', UserController.getAllUsers)
    /* app.delete('/del', UserController.deleteUser) */
    app.delete('/user/:userId', UserController.deleteUser)
    app.put('/user/:userId', UserController.updateUser)
    app.get('/search', UserController.queryUsername)
    app.get('/user/:userId', UserController.getUserByID)

}

export default { routes }