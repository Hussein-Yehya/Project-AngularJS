import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {
  usuarios = [];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar(){
    this.usuarioService.listar().subscribe(dados => {
      this.usuarios = dados;
    });
  }

  adicionar(frmUsuario: FormControl){
    console.log(frmUsuario.value);

    this.usuarioService.adicionar(frmUsuario.value)
    .subscribe(() =>{
      frmUsuario.reset();
      this.consultar();
    })
  }

}
