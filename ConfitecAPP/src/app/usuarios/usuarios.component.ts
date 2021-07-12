import { Usuario } from './../models/Usuario';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})



export class UsuariosComponent implements OnInit {
  usuarioSelecionado = new Usuario();
  usuarios = Array<Usuario>();
  acao = 0;
  userInput = new Usuario();
  retorno = false;

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.usuarioService.getAll().subscribe(dados => this.usuarios = dados);
  }

  usrSelecionado(usuario: Usuario)
  {
    this.usuarioSelecionado = usuario;

  }
  criarSelecionado()
  {
    this.usuarioSelecionado = new Usuario();
    this.acao = 1
  }
  editarSelecionado(usuario: Usuario)
  {
    this.usuarioSelecionado = usuario;
    this.acao = 2
  }
  excluirSelecionado(usuario: Usuario)
  {
    this.usuarioSelecionado = usuario;
    this.acao = 3
  }
  criar(usuario: Usuario)
  {
    this.usuarioService.criar(usuario);
  }
  editar(usuario: any)
  {
    this.usuarioService.editar(usuario);
    //.subscribe(dados => this.usuarios = dados);
  }
  excluir(usuario: any)
  {
    this.usuarioService.excluir(this.usuarioSelecionado);
  }

}
