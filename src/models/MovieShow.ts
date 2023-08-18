import {Model, Column, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement, BelongsTo} from "sequelize-typescript";
import Character from "./Character";
import CharacterMovieShow from "./CharacterMovieShow";

@Table
class MovieShow extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  image!: string;

  @Column
  title!: string;

  @Column
  releaseDate!: Date;

  @Column
  rating!: number;

  @BelongsToMany(() => Character, () => CharacterMovieShow) 
  characters!: Character[];
}

export default MovieShow
