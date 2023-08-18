import {Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement, BelongsTo} from "sequelize-typescript";
import MovieShow from "./MovieShow";
import CharacterMovieShow from "./CharacterMovieShow";

@Table
class Character extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  image!: string;

  @Column
  name!: string;

  @Column
  age!: Date;

  @Column
  weight!: string;

  @Column
  history!: string;

  @BelongsToMany(() => MovieShow, () => CharacterMovieShow) 
  moviesshows!: MovieShow[];
}

export default Character
