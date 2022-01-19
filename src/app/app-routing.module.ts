import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';

const routes: Routes = [

  // se não tiver nenhuma rota, direciona para /entrar
  {path:'', redirectTo:'entrar', pathMatch:'full'},

  // direciona a rota para os componentes em questão
  {path:'entrar', component:EntrarComponent},
  {path:'cadastrar', component:CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
