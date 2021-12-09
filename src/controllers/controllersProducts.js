import Product from "../models/products.js"

let products = [
  
]

export const verProductos =(req,res) => {
  res.status(200).render('products',{products:products})
  try {
    await Product.find({}).lean()
    
  } 
  catch (e) { console.log(e) }
}

export const vistaEditar =(req,res)=>{
  res.status(200).render('editProducts',{products:products})
}

export const crearProductos =(req,res) => {
  let product = req.body
  product.url = product.id + ".jpg"
  try {
    const product= new Product(req.body)
    await product.save()
    
  } 
  catch (e) { console.log(e) }

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
  try {
    const productfound = await Product.find({_id:req.body._id}).lean()
       if ((Object.entries(productfound).length === 0)) {
         return res.status(200).render("nofound",{message:"no se encontro el Producto"})
       }
       await Product.deleteOne({ _id: req.body._id })
   
 } 
 catch (e) { console.log(e) }
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
try {
  const productfound = await Product.find({_id:req.body._id}).lean()
      if ((Object.entries(productfound).length === 0)) {
        return res.status(200).render("nofound",{message:"no se encontro el Producto"})
      }
  await Product.findOneAndUpdate(
    { _id: req.body._id },
    { $set: product},
    { new: true }
  )
  
} 
catch (e) { console.log(e) }