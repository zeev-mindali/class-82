import { IProductModel, ProductModel } from "../models/productModel";
import ErrorModel from "../models/error-model";

// SELECT * FROM products
const getAllProducts = async():Promise<IProductModel[]>=>{
    //get all products without virtual fields
    //return ProductModel.find().exec();

    //get all products with virtual fields...
    return ProductModel.find().populate("category").exec();
};

// SELECT * FROM products WHERE id = ____
const getOneProduct = async (_id:string):Promise<IProductModel>=>{
    const product = await ProductModel.findById(_id).exec();
    if (!product) throw new ErrorModel(404,`_id ${_id} not found`);
    return product;
};

// INSERT INTO Products..... (create)
const addProduct=(product:IProductModel):Promise<IProductModel>=>{
    const errors =product.validateSync();
    if (errors) throw new ErrorModel(400,errors.message);
    return product.save();
}

// UPDATE Products SET ...
const updateProduct = async(product:IProductModel):Promise<IProductModel>=>{
    const errors = product.validateSync();
    if (errors) throw new ErrorModel(400, errors.message);

    const updatedProduct = await ProductModel.findByIdAndUpdate(product._id,product,{returnOriginal: false}).exec(); //return Original : false -> return back the db product and not the product sent to function.
    if (!updatedProduct) throw new ErrorModel(404, `_id ${product._id} not found....`);

    return updatedProduct;
}

// DELETE FROM Products.....
const deleteProduct = async (_id:string):Promise<void>=>{
    const deleteProduct = await ProductModel.findByIdAndDelete(_id).exec();
    if (!deleteProduct) throw new ErrorModel(404, `id ${_id} not found....`)
}

//////////////////////////////////////////////////////////////////////////////////
// SELECT name,price FROM products
const getPartialProducts= ():Promise<IProductModel[]>=>{
    //return ProductModel.find({},["name","price"]).exec(); //return including _id
    return ProductModel.find({},{name:true, price:true, _id:false}).exec(); //return without _id
}


export default{
    getAllProducts,
    getOneProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    getPartialProducts,
}