const {User}=require('../models/index');

class UserRepository{

    async createUser(data){

        try {

            const user= await User.create(data);
            return user;
            
        } catch (error) {
            console.log("error occured in user repository");
            throw {error};
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

}
module.exports=UserRepository;