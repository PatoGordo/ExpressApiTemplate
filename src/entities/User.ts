import {
  Entity,
  Column,
  PrimaryColumn,
  BeforeInsert,
  BeforeUpdate
} from "typeorm";
import bcrypt from "bcryptjs";
import { v4 } from "uuid";

@Entity("users")
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  beforeInsert() {
    this.id = v4();
    this.password = bcrypt.hashSync(this.password, 11);
  }
}
