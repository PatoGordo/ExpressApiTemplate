import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { uuid } from "uuidv4";

@Entity("users")
export class User {
  @PrimaryColumn("varchar", {
    length: 36
  })
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  setId() {
    this.id = uuid();
  }
}
