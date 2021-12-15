import * as middlewaresUsers from '../middlewares/middlewaresUsers.js'
export const viewlogin = (req, res) => {
    res.status(200).render('login')
  }

  export const login = (req, res) => {
    res.status(200).redirect('/products')
  }  