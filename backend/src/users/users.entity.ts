import {
  BeforeInsert,
  BeforeUpdate,
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

  @Column({name: 'nome', nullable: false})
  nome: string;

  @Column({name: 'email', nullable: false, unique: true})
  email: string;

  @Column({name: 'senha', nullable: false})
  senha: string;

  @CreateDateColumn({name: 'criacao', nullable: false})
  criacao: string;

  @UpdateDateColumn({name: 'alteracao', nullable: false})
  alteracao: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.senha = await bcrypt.hash(this.senha, 10);
  }
}
