import {Model, Column, Table, BelongsToMany, PrimaryKey, AutoIncrement, BelongsTo, ForeignKey, DeletedAt} from "sequelize-typescript";
import Character from "./Character";
import CharacterMovieShow from "./CharacterMovieShow";
import Genre from "./Genre";

@Table({ timestamps: true, paranoid: true })
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

  @ForeignKey(() => Genre)
  @Column
  genreId!: number;

  @BelongsTo(() => Genre)
  genre!: Genre;

  @DeletedAt
  deletedAt?: Date;
}

export default MovieShow
