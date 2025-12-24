import jwt from "jsonwebtoken"


export const isLoggedIn= async(req,res, next)=>{
    try{
        const  token= req.headers.authorization.split(" ")[1]

        
      

        // console.log(req.cookies)
        // console.log(req.headers.authorization)
        // const cookie=req.cookies.authToken

        if(!token){
            return res.status(401).json({
                message:"login nrequired"
            })
        }

        const decoded = await jwt.verify(token,'thisissecretpassword')
        req.user=decoded

        next()

        // return res.send(decoded)
        // return res.send(cookie)

        
    }
    
    catch(error){
        res.status(400).json({
            
            message:"error occured in middleware isLoggin",
            error:error.message
        })
    }
}