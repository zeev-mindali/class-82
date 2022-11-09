class Config {}

class DevelopmentConfig extends Config{
    public isDevelopment=true;
    public connectionString = "mongodb://localhost:27017/local";
}

class ProductionConfig extends Config{
    public isDevelopment=false;
    public connectionString = "mongodb://localhost:27017/local";
    //public connectionString = "mongodb://user:password@localhost:27017/local";
}

const config = process.env.MODE_ENV === "production" ? new ProductionConfig : new DevelopmentConfig;

export default config;