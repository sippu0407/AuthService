const UserService=require('../services/user-service');

const userService=new UserService();

const create=async(req,res)=>{
   try {
     const user=await userService.createUser({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
     });
     return res.status(201).json({
        data:user,
        message:"user created successfully",
        success:true,
        error:{}
     });
   } catch (error) {
    
     return res.status(500).json({
        data:{},
        message:"user creation failed",
        success:true,
        error:error
     });
   }
}

const signIn=async(req,res)=>{
try {
    const response= await userService.signIn({email:req.body.email,plainPassword:req.body.password});
    return res.status(200).json({
        data:response,
        message:"successfully loggedIn",
        success:true,
        error:{}
    });

} catch (error) {
   return res.status(500).json({
    data:{},
    message:"unable to signIn",
    success:false,
    error:error
   }) 
}

}

const isAuthenticated=async (req,res)=>{

    try {
        const response=await userService.isAuthenticated(req.header['x-access-token']);
        return res.status(200).json({
            data:response,
            message:"user is authenticated",
            success:true,
            error:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            message:"Unable to authenticate",
            success:false,
            error:error
        })
    }
}

module.exports={
    create,
    signIn,
    isAuthenticated
}