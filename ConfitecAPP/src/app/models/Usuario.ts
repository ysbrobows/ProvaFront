import { EscolaridadeEnum } from '../models/EscolaridadeEnum';

export class Usuario {
    id!: number;
    nome!: string;
    sobrenome!: string;
    email!: string;
    dataNascimento! : Date;
    escolaridade!: EscolaridadeEnum;
  }
  

