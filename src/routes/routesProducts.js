import * as controllerProducts from '../controllers/controllersProducts.js'


const routesProducts = (app) => {

    app.get('/editProducts',controllerProducts.verProductos)
    app.post('/editProducts',controllerProducts.crearProductos)
    app.delete('/editProducts',controllerProducts.borrarProductos)
    app.put('/editProducts',controllerProducts.update)
}
export default routesProducts 