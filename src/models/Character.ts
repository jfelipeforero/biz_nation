import {Model, Column, Table, BelongsToMany, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement, BelongsTo, DeletedAt, AllowNull} from "sequelize-typescript";
import MovieShow from "./MovieShow";
import CharacterMovieShow from "./CharacterMovieShow";

@Table({ timestamps: true, paranoid: true })
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
  age!: number;

  @Column
  weight!: string;

  @Column
  history!: string;

  @BelongsToMany(() => MovieShow, () => CharacterMovieShow) 
  moviesshows!: MovieShow[];

  @DeletedAt
  deletedAt?: Date;
}

export default Character
