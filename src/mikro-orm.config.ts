import { Warehouse } from "./entities/Warehouse";
import { MikroORM } from "@mikro-orm/core"
import path from "path"
import { Stock } from "./entities/Stock";

export default {
    migrations:{
        path: path.join(__dirname, './migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    },
    entities:[Warehouse, Stock],
    dbName: "warehouse",
    user:"postgres",
    password:"kamen22",
    type:"postgresql",
    debug: true,
}as Parameters<typeof MikroORM.init>[0];