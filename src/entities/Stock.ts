import { Warehouse } from './Warehouse';
import {
    Entity,
    PrimaryKey,
    Property,
    ManyToOne,
    ManyToMany,
    Collection,
    OneToMany,
  } from "@mikro-orm/core";
  
  @Entity()
  export class Stock {
    @PrimaryKey({ type: "number" })
    id!: number;
  
    @Property({ type: "text" })
    name!: string;
    @ManyToOne(()=> Warehouse)
    warehouse!: Warehouse;
  
    @Property({ type: "date" })
    createdAt = new Date();
  
    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt = new Date();
  }
  