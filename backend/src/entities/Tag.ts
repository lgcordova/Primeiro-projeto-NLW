import { Entity,PrimaryColumn,Column,CreateDateColumn, UpdateDateColumn } from "typeorm";
import {Expose} from "class-transformer"
import{v4 as uuid} from "uuid"

@Entity("tags")
class Tag {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column("text")
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  Updated_at: Date;

  @Expose({name: "nameCustom"})
  nameCustom(): String{
    return '#${this.name}';
  }


  constructor(){
    if (!this.id){
      this.id = uuid();
    }
  }
}

export { Tag };