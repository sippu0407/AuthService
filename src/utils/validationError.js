const AppError=require('./appError');
const {StatusCodes}=require('http-status-codes');

class ValidationError extends AppError{
    constructor(err){
        super(err.names,err.message,"bad request",StatusCodes.BAD_REQUEST);
    }

}
module.exports=ValidationError;