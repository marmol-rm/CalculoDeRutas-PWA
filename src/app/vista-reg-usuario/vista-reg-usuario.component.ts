import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-reg-usuario',
  templateUrl: './vista-reg-usuario.component.html',
  styleUrls: ['./vista-reg-usuario.component.css']
})
export class VistaRegUsuarioComponent implements OnInit {

  username: string | undefined;
  email: string | undefined;
  password: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.username = '';
    this.email = '';
    this.password = '';
  }

  onSubmit(): void {
    console.log('Username:', this.username);
    console.log(('Email'), this.email);
    console.log('Password:', this.password);

    this.username = '';
    this.email = '';
    this.password = '';
  }
}
