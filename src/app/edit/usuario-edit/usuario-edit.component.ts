import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario: number
  senhaEntry: string
  tipoEntry: string


  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      // alert("Sua sessão expirou. Faça o login novamente.")
      this.router.navigate(['/entrar'])
    }

    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUsuario(this.idUsuario)
  }

  confirmarSenha(event: any) { // pega o valor da senha
    this.senhaEntry = event.target.value
  }

  tipoUsuario(event: any) { // pega o valor do tipo de usuário
    this.tipoEntry = event.target.value
  }

  atualizar() {

    this.usuario.tipo = this.tipoEntry

    if (this.usuario.senha != this.senhaEntry) {
      alert('A senha digitada não confere!')

    } else {
      this.authService.atualizar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp 
        
        this.router.navigate(['/inicio'])
        alert('Usuário atualizado com sucesso!')
      })
    }
  }

  findByIdUsuario(id: number) {
    this.authService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

}
