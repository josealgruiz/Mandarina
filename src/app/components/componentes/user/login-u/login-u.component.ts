import { Component, OnInit } from '@angular/core';
import { User } from './user';




@Component({
  selector: 'app-login-u',
  templateUrl: './login-u.component.html',
  styleUrls: ['./login-u.component.css']
})
export class LoginUComponent implements OnInit {
 userModel= new User();
 name=this.userModel.name;
 pass=this.userModel.pass;

  constructor() { }

  ngOnInit() {
  }  

  onSubmit(){
    if(name=='user' || this.userModel.pass=='1'){
    console.log(this.userModel);
  }
  if(name=='admin' || this.userModel.pass=='10'){
  console.log(this.userModel);
}
  }
} 



 
    


