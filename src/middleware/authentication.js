const validAuth=(req,res,next)=>{

    if(!req.body.email || !req.body.password){
      
        return res.status(400).json({
            data:{},
            message:"email or password is missing",
            success:false,
           
        });
    }
    next();
}

module.exports={
    validAuth
}