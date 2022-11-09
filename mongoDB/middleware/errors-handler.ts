import { NextFunction, Request,Response } from "express";
import config from "../utils/config";

const errorsHandler=(err:any,request:Request,response:Response, next:NextFunction):void=>{
    const status = err.status || 500;

    console.log(err);

    let msg;
    if (config.isDevelopment){
        msg = err.message;
    }
    else if(status !== 500){
        msg = err.message;
    } else {
        msg = "Something was terribly wrong, oh shit....";
    }

    response.status(status).send(msg);

}

export default errorsHandler;