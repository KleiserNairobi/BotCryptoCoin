import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity({name: 'users'})
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'nome', nullable: false, length: 100})
  nome: string;

  @Column({name: 'email', nullable: false, unique: true, length: 255})
  email: string;

  @Column({name: 'senha', nullable: false, length: 255})
  senha: string;

  @CreateDateColumn({name: 'criacao', nullable: false})
  criacao: string;

  @UpdateDateColumn({name: 'alteracao', nullable: false})
  alteracao: string;

  @BeforeInsert()
  async hashPassword() {
    this.senha = await bcrypt.hash(this.senha, 10);
  }
}
