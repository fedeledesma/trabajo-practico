import * as controllerProducts from '../controllers/controllersProducts.js'


const routesProducts = (app) => {

    app.get('/productos',controllerProducts.verProductos)

}
export default routesProducts 