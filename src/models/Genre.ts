import {Model, Column, Table, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement, HasMany} from "sequelize-typescript";
import MovieShow from "./MovieShow";

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

  @HasMany(() => MovieShow)
  moviesshows!: MovieShow[];
}

export default Genre;
