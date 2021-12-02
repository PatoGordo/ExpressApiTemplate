import { MigrationInterface, QueryRunner } from "typeorm";

export class AddingToDoTable1638411738131 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE todos (
        id VARCHAR(36) NOT NULL,
        owner_id VARCHAR(36) NOT NULL,
        content VARCHAR(255) NOT NULL,
        completed BOOLEAN NOT NULL DEFAULT false
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE todos");
  }
}
