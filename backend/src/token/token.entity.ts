import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'tokens'})
export class TokenEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({length: 255})
  hash: string;

  @Column({length: 255})
  email: string;
}
