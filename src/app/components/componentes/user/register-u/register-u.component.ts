import { Component, OnInit } from '@angular/core';
import { Register } from './register';

@Component({
  selector: 'app-register-u',
  templateUrl: './register-u.component.html',
  styleUrls: ['./register-u.component.css']
})
export class RegisterUComponent implements OnInit {
  registerForm = new Register();

  constructor() { }

  ngOnInit() {
  } 

}
