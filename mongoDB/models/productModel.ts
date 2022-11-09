import { CategoryModel } from "./categoryModel";
import {Document, model, Schema} from "mongoose";

//1. Model Interface describing the data in the model:
export interface IProductModel extends Document{
    //don't specift the _id here!!!!!
    name:string;
    price:number;
    stock:number;
    categoryId : Schema.Types.ObjectId; //foregin key
}

// 2. Model Schema describing validation, constrains and more:
const ProductSchema = new Schema<IProductModel>({
    name: {
        type: String,
        required: [true, "missing name"],
        minlength: [3, "Name too short"],
        maxlength: [ 100, "Namme to long"],
        match: [/^[A-Z].+$/ ,"Name must start with capital letter"],  //Regex
        trim: true,
        unique: true
    },
    price: {
        type:Number,
        required: [true, "Missing price"],
        min: [0, "price can not be negative"],
        max: [1000, "price can not exceed 1000"]
        
    },
    stock: {
        type:Number,
        required: [true, "missing Stock"],
        min:[0, "Stock can't be negative"],
        max:[10000, "Stock can't exceed 10000, we dont have room in Dolev house"]
    },
    categoryId:{
        type:Schema.Types.ObjectId
    }
},{
    versionKey: false, //dont create __v field for versioning
    toJSON: {virtuals:true}, //when converting db to json - allow to brind virtual fields.....
    id:false //dont duplicate _id into id field
});

//virtual Fields:
ProductSchema.virtual("category",{
    ref:CategoryModel, //which model are you descrbing
    localField:"categoryId", //which field in our model is it
    foreignField: "_id", //which fielkd in categoryModel is it
    justOne: true //category is a single object and not array
});

// 3. model class - this is the final model class:
export const ProductModel = model<IProductModel>("ProductModel", ProductSchema, "products");