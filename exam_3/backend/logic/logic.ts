import dal from "../utils/dal_mysql";
import { OkPacket } from "mysql";
import dal_mysql from "../utils/dal_mysql";
import Manufactors from "../model/manufactors";
import Products from "../model/products";
//read
async function getAllProducts(): Promise<Products[]> {
  const sql = `SELECT products.* , manufactors.name
               FROM products JOIN manufactors
               ON products.manufactor_id = manufactors.id`;
  const result = await dal.execute(sql);
  return result;
}

// async function updateStock():Promise<void>{
const updateStock = async (product_id: number, qty: number): Promise<void> => {
  const sql = `UPDATE products SET units = ${qty}, last_update=${new Date()} WHERE (id = ${product_id})`;
  const result: OkPacket = await dal.execute(sql);
};

export default {
  getAllProducts,
  updateStock,
};
