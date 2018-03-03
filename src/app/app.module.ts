import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataTableModule, ButtonModule, InputMaskModule, CalendarModule } from 'primeng/primeng';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';

import { ItemService } from './item/item.service';
import { UsuarioService } from './usuario/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCadastroComponent,
    UsuarioCadastroComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpClientModule,
    CalendarModule,
    InputMaskModule,
    InputTextModule, 
    ButtonModule, 
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    PanelModule
  ],
  providers: [
    ItemService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
