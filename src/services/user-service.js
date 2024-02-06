const UserRepository=require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const {JWT_KEY}=require('../config/serverConfig');
const bcrypt=require('bcrypt');

class UserService{

    constructor(){
     this.userRepository=new UserRepository();
    }

    createToken({email,id}){
       try {
        const token=jwt.sign({email,id},JWT_KEY,{expiresIn:60});
        return token;
         
       } catch (error) {
         console.log("unable to create token");
         throw error;
       }
        
    }

    verifyToken(token){
      
        try {
           const details=jwt.verify(token,JWT_KEY);  
           return details;
        } catch (error) {
            console.log('error occured in verification of token');
            throw error;
        }
    }

    checkPassword(hashPwd,plainPwd){ 
          try {
              const matched = bcrypt.compareSync(plainPwd,hashPwd);
              return matched;
          } catch (error) {
            console.log('password entered was wrong');
            throw error;
          }
    }

    async createUser(data){
        try {
            const user=await this.userRepository.createUser(data);
            return user;
        } catch (error) {
            console.log('error occured in service layer');
            throw {error};
        }
    }

    async signIn({email,password}){

     try {

         //  get user by email
     const user=await this.userRepository.getUserByEmail(email);

     // if user exists then
     if(!user){
        throw {error:"user does not exits"}
     }
     // compare pwd of user
     const pwdMatch= this.checkPassword(user.password,password);

     console.log(pwdMatch);
     //if pwd matched
     if(!pwdMatch){
        throw {error:"email or password is wrong"};
     }
     //create a jwt-token
     const jwtToken=this.createToken({email:email,id:user.id});
     //return token
     return jwtToken;
        
     } catch (error) {
        console.log("error occured in service layer");
        throw error;
     }

    }

    async isAuthenticated(token){

        try {
            const userDetails=this.verifyToken(token);

            if(!userDetails){
                throw {error:"invalid token"};
            }

            // if user has deactivated hi/her account
            const user=await this.userRepository.getUser(userDetails.id);

            if(!user){
                throw {error:"no such user found"};
            }

            return userDetails.id;

        } catch (error) {
            console.log("error occurred in service layer");
            return error;
        }
    }

    async isAdminService(userId){
        try {
        
          return await this.userRepository.isAdmin(userId);
         } catch (error) {
             console.log("error occurred in repository layer");
             throw error;
         }
     }
    

}
module.exports=UserService;