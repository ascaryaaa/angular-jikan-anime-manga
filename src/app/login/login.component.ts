import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service: AuthService) {}

  onSubmit(form:NgForm) {
    //alert(form.value?.username);
    if(!form.valid){
      alert("please complete the form!");
      return;
    }
    //alert('login success');
    this.service.login(form.value)
  }

}
