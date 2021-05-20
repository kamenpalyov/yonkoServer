import { Migration } from '@mikro-orm/migrations';

export class Migration20210520040028 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "stock" drop column "name2";');
  }

}
