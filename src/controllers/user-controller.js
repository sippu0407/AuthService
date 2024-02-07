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
    if(error.name=="SequelizeValidationError") return error;
     return res.status(500).json({
        message:"not able to create a user",
        success:true,
        error:error
     });
   }
}

const signIn=async(req,res)=>{
try {
    const response= await userService.signIn(req.body);
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
        const response=await userService.isAuthenticated(req.headers['x-access-token']);
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
const isAdmin=async (req,res)=>{

    try {
       
        const response=await userService.isAdminService(req.body.id);
        if(response){
            return res.status(200).json({
                data:response,
                message:"this user is admin",
                success:true,
                error:{}
            })
        }
        else{
            return res.status(200).json({
                data:response,
                message:"this user not admin",
                success:true,
                error:{}
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            data:{},
            message:"error occured in isAdmin",
            success:false,
            error:error
        })
    }
}

module.exports={
    create,
    signIn,
    isAuthenticated,
    isAdmin
}