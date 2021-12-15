export const auth =(req,res,next)=>{
    if(req.body.email == "maxi@asd.com" && req.body.password == "123") {
       next()  
    } else {
        res.status(200).redirect('/fallaingreso')
}}