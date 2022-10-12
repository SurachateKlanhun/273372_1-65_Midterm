const Midterm = require('./controllers/Midterm1-65')
const UserController = require('./controllers/UserController')

module.exports = (app) => {
    app.post('/user', UserController.create)
    
    app.put('/user', UserController.put)

    app.Read('/user', UserController.Read)

    app.Update('/user', UserController.Update)
    
    app.delete('/user', UserController.remove)
    
    app.get('/user', UserController.show)
    
    app.get('/users', UserController.index)

    app.post('/add1', Midterm.add1)

    app.post('/function1', Midterm.function1)

    app.post('/function2', Midterm.function2)

}