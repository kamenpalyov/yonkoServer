import {
  Entity,
  PrimaryKey,
  Property,
  ManyToOne,
  ManyToMany,
  Collection,
  OneToMany,
} from "@mikro-orm/core";
import { Stock } from "./Stock";

@Entity()
export class Warehouse {
  @PrimaryKey({ type: "number" })
  id!: number;

  @Property({ type: "text" })
  name!: string;

  @OneToMany(()=>Stock , s => s.warehouse)
  stocks =new Collection<Stock>(this);

  @Property({ type: "date" })
  createdAt = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}
