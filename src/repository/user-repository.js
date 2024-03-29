const {User,Role}=require('../models/index');
const ValidationError=require('../utils/validationError');
class UserRepository{

    async createUser(data){

        try {

            const user= await User.create(data);
            return user;
            
        } catch (error) {
            if(error.name=="SequelizeValidationError"){
                throw new ValidationError(error);
        
            }
            throw error;
        }
    }

    async getUserByEmail(email){

        try {
          const user=await User.findOne({where:{
              email:email}
            })  ;

           return user; 
        } catch (error) {
            console.log("error occurred in repository layer");
            throw error;
        }
    }
    async getUser(userId){
        try {
            const user= await User.findByPk(userId);
            return user;
        } catch (error) {
            console.log("error occurred in repository layer");
            throw error;
        }
    }
    async isAdmin(userId){
        try {
           const user=await User.findByPk(userId);
           console.log(user)
           const role=await Role.findOne({where:{name:"ADMIN"}});
           console.log(role)
           const response= await user.hasRole(role);
           return response;
        } catch (error) {
            console.log("error occurred in repository layer");
            throw error;
        }
    }

}
module.exports=UserRepository;