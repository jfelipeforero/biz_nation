import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  ForeignKey
} from "sequelize-typescript";
import Character from "./Character";
import MovieShow from "./MovieShow";

@Table
class CharacterMovieShow extends Model<CharacterMovieShow> {
  @ForeignKey(() => Character)
  @Column
  characterId!: number;

  @ForeignKey(() => MovieShow)
  @Column
  movieshowId!: number;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}

export default CharacterMovieShow;
