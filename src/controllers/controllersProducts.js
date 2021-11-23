
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