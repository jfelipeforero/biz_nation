import {Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, PrimaryKey, BeforeUpdate, BeforeCreate, AutoIncrement, DataType} from "sequelize-typescript";
import { compare, hash } from "bcrypt";

@Table
class User extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number

  @Column
  username!: string;
 
  @Column
  email!: string;

  @Column(DataType.VIRTUAL)
  password!: string;

  @Column
  passwordHash!: string;
  
  @CreatedAt
  @Column
  createdAt!: Date;

  @BeforeUpdate
  @BeforeCreate
  static hashPassword = async (instance: User): Promise<void> => {
    if (instance.password) {
      instance.passwordHash = await hash(instance.password, 10);
    }
  };

  public checkPassword = async (password: string): Promise<boolean> => {
    return compare(password, this.getDataValue("passwordHash"));
  } 
}

export default User
