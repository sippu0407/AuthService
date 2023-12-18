const UserService=require('../services/user-service');

const userService=new UserService();

const create=async(req,res)=>{
   try {
     const user=await userService.createUser({
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

module.exports={
    create,
}