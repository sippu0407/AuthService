'use strict';
const {
  Model
} = require('sequelize');

const bcrypt=require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name:{
      type: DataTypes.STRING,
     allowNull:false
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:true
      }
    },
    password:{ 
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[8,200]
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user)=>{
        const hashPwd = bcrypt.hashSync(user.password,10);
        user.password=hashPwd;
  });
  return User;
};