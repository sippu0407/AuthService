const {StatusCodes}=require('http-status-codes')
class AppError extends Error{

    constructor(name="internal server error",
                message='something went wrong',
                description='something went wrong',
                statusCode=
                StatusCodes.INTERNAL_SERVER_ERROR){
                    super();
                    this.name=name;
                    this.message=message;
                    this.description=description;
                    this.statusCode=statusCode;
                }
}

module.exports=AppError;