import * as controllerProducts from '../controllers/controllerProducts.js'


const routesProducts = (app) => {

    app.get('/products',controllerProducts.verProductos)
    app.get('/editProducts',controllerProducts.vistaEditar)
    app.post('/editProducts',controllerProducts.crearProductos)
    app.delete('/editProducts',controllerProducts.borrarProductos)
    app.put('/editProducts',controllerProducts.update)
}
export default routesProducts 