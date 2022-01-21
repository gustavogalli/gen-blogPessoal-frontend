import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin
  senhaEntry: string
  tipoEntry: string

  constructor() { }

  ngOnInit() { // método chamado quando a página iniciar
    window.scroll(0,0) // vai pro topo da tela, eixo X e Y em 0
  }

  confirmarSenha(event: any){
    this.senhaEntry = event.target.value
  }

  tipoUsuario(event: any){
    this.tipoEntry = event.target.value
  }


}
