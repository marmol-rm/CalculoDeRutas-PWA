import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-login',
  templateUrl: './vista-login.component.html',
  styleUrls: ['./vista-login.component.css']
})
export class VistaLoginComponent implements OnInit {

  username: string | undefined;
  password: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    this.username = '';
    this.password = '';
  }

}
