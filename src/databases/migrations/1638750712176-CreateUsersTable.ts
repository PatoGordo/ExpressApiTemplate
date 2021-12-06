import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1638750712176 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true
          },
          {
            name: "name",
            type: "varchar"
          },
          {
            name: "password",
            type: "varchar"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
