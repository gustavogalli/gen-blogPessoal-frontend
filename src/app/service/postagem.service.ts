import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient /* acessa os métodos HTTP */) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  

}
