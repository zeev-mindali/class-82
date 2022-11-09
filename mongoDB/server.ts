import dotenv from "dotenv"
dotenv.config(); //read the .env file into process.env

import express, {NextFunction,  Request,Response} from "express";
import cors from "cors";
import config from "./utils/config";
import dal  from "./dal/dal";
dal.connect();
import errorsHandler from "./middleware/errors-handler";
import ErrorModel from "./models/error-model";
import controller from "./controllers/ProductsController";

const server = express();

if (config.isDevelopment) server.use(cors());
server.use(express.json());
server.use("/api",controller);
server.use("*", (request:Request, response:Response, next:NextFunction)=>{
    next(new ErrorModel(404, "Route not found"));
})

server.use(errorsHandler);
server.listen(process.env.PORT, ()=>{console.log("Listening on port: ",process.env.PORT)})
