import * as controllerCarts from '../controllers/controllersCarts.js'


const routesCarts = (app) => {

    app.get('/carrito',controllerCarts.verCarts)
    app.post('/carrito',controllerCarts.addCarts)
    app.delete('/carrito',controllerCarts.deleteCarts)
}
export default routesCarts 