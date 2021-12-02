import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn
} from "typeorm";
import { uuid } from "uuidv4";
import { User } from "./User";

@Entity("todos")
export class ToDo {
  @PrimaryColumn("varchar", {
    length: 36
  })
  id: string;

  @OneToOne(() => User)
  @JoinColumn()
  owner_id: User;

  @Column()
  content: string;

  @Column()
  completed: boolean;

  @BeforeInsert()
  setId() {
    this.id = uuid();
  }
}
