let carts = []

export const verCarts =(req,res) => {
  res.status(200).render('cart',{carts:carts})
}

export const addCarts =(req,res) => {
  carts.push(req.body)
  
  console.log(carts)
  res.status(200).redirect('/carrito')
}

export const deleteCarts =(req,res) => {
  console.log (req.body)
  carts = carts.filter(element => element.id != req.body.id)
  res.status(200).render('carrito')
}