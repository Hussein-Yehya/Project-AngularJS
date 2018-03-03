import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UsuarioService {
  usuarioUrl = 'http://localhost:8080/usuarios';
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(this.usuarioUrl);
  }

  adicionar(usuario: any){
    console.log('Criando um novo usuário: ')
    return this.http.post(this.usuarioUrl, usuario);
  }
}