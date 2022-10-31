import dal from "../utils/dal_mysql";
import { OkPacket } from "mysql";
import dal_mysql from "../utils/dal_mysql";
import Manufactors from "../model/manufactors";
import Products from "../model/products";
import config from "../utils/config";
//read
async function getAllProducts(): Promise<Products[]> {
  const sql = `SELECT products.* , manufactors.manufactor_name
               FROM products JOIN manufactors
               ON products.manufactor_id = manufactors.id`;
  const result = await dal.execute(sql);
  return result;
}

const singleItem = async (product_id: number): Promise<Products> => {
  const sql = `SELECT products.* , manufactors.manufactor_name
  FROM products JOIN manufactors
  ON products.manufactor_id = manufactors.id
  WHERE products.id=${product_id}`;
  const result = await dal.execute(sql);
  return result;
};

// async function updateStock():Promise<void>{
const updateStock = async (product_id: number, qty: number): Promise<void> => {
  const date = new Date().toISOString().slice(0, 19).replace("T", " ");
  const sql = `UPDATE products SET units = ${qty}, last_update='${date}' WHERE (id = ${product_id})`;
  const result: OkPacket = await dal.execute(sql);
};

const createData = async () => {
  const result: OkPacket = await dal.execute(config.db_init);
};

export default {
  getAllProducts,
  updateStock,
  singleItem,
  createData,
};
