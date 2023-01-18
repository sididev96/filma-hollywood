import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName:string = ''
  password: string = ''
  
  login() {
    if (this.userName.length !== 0 && this.password.length !== 0) {
      console.log("done");
      
    }
  }
}


