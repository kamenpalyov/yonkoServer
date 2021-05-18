import { Warehouse } from './entities/Warehouse';
import 'reflect-metadata';
import { MikroORM } from "@mikro-orm/core";
import ormConfig from "./mikro-orm.config"
import { Stock } from './entities/Stock';
import express from "express"
const main = async()=>{
    const orm = await MikroORM.init(ormConfig)
    await orm.getMigrator().up();
    // const createWarehouse = orm.em.create(Stock, {name:"Chinese Container", warehouse:1})
    // await orm.em.persistAndFlush(createWarehouse)
    const app = express();
    app.get("/", async (req, resp)=>{
        const stock = await orm.em.find(Stock,{})
        resp.json(stock)
    })
    app.listen(4000, ()=>console.log("server is running on port 4000"))

}

main().catch(err=> console.error(err))