import * as controllerUsers from'../controllers/controllerUsers.js'
import * as middlewaresUsers from'../middlewares/middlewaresUsers.js'
const routesUsers = app => {
    app.get('/login',controllerUsers.viewlogin)
    app.post('/login',controllerUsers.login)
}
export default routesUsers

