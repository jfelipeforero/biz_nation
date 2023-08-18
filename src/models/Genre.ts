import {Model, Column, Table, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement} from "sequelize-typescript";

@Table
class Genre extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  name!: string;

  @Column
  image!: string;

  @Column
  movieshow!: string;
}

export default Genre;
