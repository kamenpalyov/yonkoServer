import { Migration } from '@mikro-orm/migrations';

export class Migration20210518164807 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "warehouse" ("id" serial primary key, "name" text not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');

    this.addSql('create table "stock" ("id" serial primary key, "name" text not null, "warehouse_id" int4 not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');

    this.addSql('alter table "stock" add constraint "stock_warehouse_id_foreign" foreign key ("warehouse_id") references "warehouse" ("id") on update cascade;');
  }

}
