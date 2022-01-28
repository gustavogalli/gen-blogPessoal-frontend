import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient /* acessa os métodos HTTP */) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://blogpessoalgustavogalli.herokuapp.com/tema', this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://blogpessoalgustavogalli.herokuapp.com/tema', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://blogpessoalgustavogalli.herokuapp.com/tema', tema, this.token)
  }

  deleteTema(id: number){ // não precisa de Observable pq não tá passando um objeto, só um id
    return this.http.delete(`https://blogpessoalgustavogalli.herokuapp.com/tema/${id}`, this.token)
  }

}
