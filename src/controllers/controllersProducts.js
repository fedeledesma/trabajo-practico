let products = [
  
]

export const verProductos =(req,res) => {
  res.status(200).render('products',{products:products})
}

export const vistaEditar =(req,res)=>{
  res.status(200).render('editProducts',{products:products})
}

export const crearProductos =(req,res) => {
  let product = req.body
  product.id = Math.floor(Math.random()*10000000000)
  product.url = product.id + ".jpg"

  const EDFile = req.files.url
    EDFile.mv(`./public/img/products/${product.url}`,err => {
      if(err) return res.status(500).send({ message : err })
      return res.status(200).render("nofound",{message:"no se encontro el Producto"})
      })

  products.push(product)
  console.log(products)
  res.status(200).redirect('/editProducts')
  
}

export const borrarProductos =(req,res) => {
  console.log(req.body)
  products = products.filter(element => element.id != req.body.id)
  res.status(200).redirect('/editProducts')
}  

export const update =(req,res) => {
  console.log(req.body)
  let product = products.find(element => element.id == req.body.id)
  console.log(product)
  if(req.body.nombre) product.nombre = req.body.nombre
  if(req.body.precio) product.precio = req.body.precio
  if(req.body.stock) product.stock = req.body.stock
  console.log(product)
  res.status(200).redirect('/editProducts')
}