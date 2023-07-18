import { Component, OnInit } from '@angular/core';
import {Usuario} from "../classes/usuario";
import {CdrService} from "../service/cdr.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vista-reg-usuario',
  templateUrl: './vista-reg-usuario.component.html',
  styleUrls: ['./vista-reg-usuario.component.css']
})
export class VistaRegUsuarioComponent implements OnInit {

  usuario : Usuario;

  constructor(private service : CdrService, private router : Router) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  onSubmit(): void {
    this.service.guardaUsuario(this.usuario).subscribe()
    if(this.usuario.usuEmail && this.usuario.usuUsername && this.usuario.usuPassword) {
      this.usuario = new Usuario()
      this.router.navigate(['/login'])
    }
    this.usuario = new Usuario()
  }
}
