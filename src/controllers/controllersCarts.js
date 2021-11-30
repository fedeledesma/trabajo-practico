let carts = []

export const verCarts =(req,res) => {
  res.status(200).render('carrito')
}

export const addCarts =(req,res) => {
  console.log (req.body)
  res.status(200).render('carrito')
}

export const deleteCarts =(req,res) => {
  console.log (req.body)
  carts = carts.filter(element => element.id != req.body.id)
  res.status(200).render('carrito')
}