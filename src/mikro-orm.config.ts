import { Warehouse } from "./entities/Warehouse";
import { MikroORM } from "@mikro-orm/core"
import path from "path"
import { Stock } from "./entities/Stock";
import * as dotenv from "dotenv"
dotenv.config();

//ORM Configuration
export default {
    migrations:{
        path: path.join(__dirname, './migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    },
    entities:[Warehouse, Stock],
    dbName: process.env.DB_NAME,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    type:"postgresql",
    debug: true,
}as Parameters<typeof MikroORM.init>[0];