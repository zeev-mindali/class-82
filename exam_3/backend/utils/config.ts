class Config {
  public port = 3001;
  public mysqlHost = "172.19.0.2";
  public mysqlUser = "root";
  public mysqlPassword = "12345678";
  public mysqlDatabase = "exam";

  public db_init = `
  DROP TABLE IF EXISTS manufactors

  CREATE TABLE manufactors (
    id int NOT NULL AUTO_INCREMENT,
    manufactor_name varchar(45) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY name_UNIQUE (manufactor_name)
  ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

  LOCK TABLES manufactors WRITE;
  INSERT INTO manufactors VALUES (2,'apple'),(3,'ibm'),(1,'microsoft');
  UNLOCK TABLES;

  DROP TABLE IF EXISTS products;
  CREATE TABLE products (
    id int NOT NULL AUTO_INCREMENT,
    product_name varchar(45) NOT NULL,
    price decimal(10,0) DEFAULT NULL,
    manufactor_id int DEFAULT NULL,
    units int DEFAULT NULL,
    last_update datetime DEFAULT NULL,
    PRIMARY KEY (id),
    KEY pord_vs_manuf_idx (manufactor_id),
    CONSTRAINT prod_vs_manuf FOREIGN KEY (manufactor_id) REFERENCES manufactors (id)
  ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

  LOCK TABLES products WRITE;
  INSERT INTO products VALUES (1,'iphone 14 pro max 256',4990,2,100,'2022-10-24 10:27:15');
  UNLOCK TABLES;
`;
}

const config = new Config();
export default config;
