let products = [
  {
    title:"Pedal Jojo Mayer",
    price:45000,
    description:"Profesional, plegable. Hecho en aluminio, traccion a cinta",
    stock:8
  },
  {
    title:"Meinl DUO",
    price:25000,
    description:"Semiprofesional, hibrido aleacion b8 y b12, sustain y peso medio",
    stock:8
  },
]

export const verProductos =(req,res) => {
  res.status(200).render('products',{products:products})
}

export const crearProductos =(req,res) => {
  let product = req.body
  product.id = Math.floor(Math.random()*10000000000)
  products.push(req.body)
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
  products = products.filter(element => element.id == req.body.id)
  if(req.body.name) products.name = req.body.name
  if(req.body.price) products.price = req.body.name
  if(req.body.stock) products.stock = req.body.name
  res.status(200).redirect('/editProducts')
}