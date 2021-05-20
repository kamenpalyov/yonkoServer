import { Field, ObjectType } from 'type-graphql';
import {
  Entity,
  PrimaryKey,
  Property,
  Collection,
  OneToMany,
} from "@mikro-orm/core";
import { Stock } from "./Stock";

@ObjectType()
@Entity()
export class Warehouse {
  @Field()
  @PrimaryKey({ type: "number" })
  id!: number;

  @Field()
  @Property({ type: "text" })
  name!: string;

  @Field(()=> Stock)
  @OneToMany(()=>Stock , s => s.warehouse)
  stocks =new Collection<Stock>(this);

  @Field(() => String)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}
