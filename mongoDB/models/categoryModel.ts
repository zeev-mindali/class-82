import {Document,model,Schema} from "mongoose";

// 1. interface describing category:
export interface IcategoryModel extends Document{
    name:string;
    description:string;
}

// 2. schema describing category:
const CategorySchema = new Schema<IcategoryModel>({
    name: {
        type:String,
        required: [true, "Missing name"],
        minlength: [2, "Name too short"],
        maxlength: [100,"Name too long"],
        trim : true,
        unique:true
    },
    description: {
        type:String,
        required: [true,"Missing description"],
        minlength: [2, "Description too short"],
        maxlength: [200, "Descrption too long"],
        trim :true
    }
},{
    versionKey: false
});
//3, category model
export const CategoryModel = model<IcategoryModel>("CategoryModel", CategorySchema, "categories");
