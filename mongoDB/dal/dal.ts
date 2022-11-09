import mongoose from "mongoose";
import config from "../utils/config";

 const connect = async():Promise<void>=>{
    try{
        const db = await mongoose.connect(config.connectionString);
        console.log("We are connected to mongoDB "+db.connections[0].name);
    } catch (err:any){
        console.log(err);
    }
}

export default{
    connect
}