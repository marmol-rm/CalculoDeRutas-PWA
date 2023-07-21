import { Component, OnInit } from '@angular/core';
import {CdrService} from "../service/cdr.service";
import {Router} from "@angular/router";
import {Usuario} from "../classes/usuario";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-vista-login',
  templateUrl: './vista-login.component.html',
  styleUrls: ['./vista-login.component.css']
})
export class VistaLoginComponent implements OnInit {

  user : Usuario;

  formulario = new FormGroup({
    email :  new FormControl('',
      [Validators.required, Validators.email]),
    pwd : new FormControl('',
      [Validators.required, Validators.requiredTrue])
  })

  constructor(
    private service : CdrService,
    private router : Router) { }

  ngOnInit(): void {
    this.user = new Usuario();
  }

  redirecToReg() {
    this.router.navigate(['/reg']);
  }

  onSubmit(): void {
    this.user.usuEmail = this.formulario.get('email')?.value
    this.user.usuPassword = this.formulario.get('pwd')?.value
    //this.validateUser()
    this.router.navigate(['/map'], {
      state: {email: this.user.usuEmail}
    })
    this.user = new Usuario();
  }

  validateUser() {
    return this.service.validaUsuario(this.user).subscribe(valido => {
      if(valido) {
        this.router.navigate(['/map'], {
          state: {email: this.user.usuEmail}
        })
        this.user = new Usuario();
      } else {
        alert('Las credenciales no son válidas');
      }
    })
  }

}
