class Config {
  public port = 3100;
  public mysqlHost = "localhost";
  public mysqlUser = "root";
  public mysqlPassword = "12345678";
  public mysqlDatabase = "books_db";
}

const config = new Config();

export default config;
