import { Warehouse } from "./Warehouse";
import { Entity, PrimaryKey, Property, ManyToOne } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
@ObjectType()
@Entity()
export class Stock {
  @Field()
  @PrimaryKey({ type: "number" })
  id!: number;
  @Field()
  @Property({ type: "text" })
  name!: string;
  @Field(()=>Warehouse)
  @ManyToOne(() => Warehouse)
  warehouse!: Warehouse;
  @Field(() => String)
  @Property({ type: "date" })
  createdAt = new Date();
  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}
