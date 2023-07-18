import { Component, OnInit } from '@angular/core';
import {CdrService} from "../service/cdr.service";
import {Router} from "@angular/router";
import {Usuario} from "../classes/usuario";

@Component({
  selector: 'app-vista-login',
  templateUrl: './vista-login.component.html',
  styleUrls: ['./vista-login.component.css']
})
export class VistaLoginComponent implements OnInit {

  username: string;
  email : string;
  password: string;

  user : Usuario;

  constructor(private service : CdrService, private router : Router) { }

  ngOnInit(): void {
  }

  redirecToReg() {
    this.router.navigate(['/reg']);
  }

  onSubmit(): void {
    this.service.setEmail(this.email)
    this.router.navigate(['/map'])
    this.email = '';
    this.password = '';
  }

}
