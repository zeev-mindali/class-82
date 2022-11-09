import { ProductModel } from "../models/productModel";
import express , {NextFunction, Request, Response} from "express";
import logic from "../logic/productsLogic"

const router = express.Router();

router.get("/products", async (request:Request, response:Response, next:NextFunction)=>{
    try{
        const products = await logic.getAllProducts();
        response.json(products)
    } catch (err:any){
        next(err);
    }
});