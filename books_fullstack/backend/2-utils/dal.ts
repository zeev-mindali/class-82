import mysql from "mysql";
import config from "./config";
//Data Abastrect Layer

//mysql connection
const connection = mysql.createPool({
  host: config.mysqlHost,
  user: config.mysqlUser,
  password: config.mysqlPassword,
  database: config.mysqlDatabase,
});

console.log("we are connected to MySQL server");

//sql -> SELECT * FROM Books
//sql -> SELECT * FROM Books where price<100
//promise
function execute(sql: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    //to promisify an asynchronous function
    connection.query(sql, (err, result) => {
      //if there is an error
      if (err) {
        reject(err);
        return;
      }
      //No error - report data
      resolve(result);
    });
  });
}

export default {
  execute,
};
