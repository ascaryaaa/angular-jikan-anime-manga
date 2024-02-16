import { Injectable } from '@angular/core';
import { User, UserForm } from './auth';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

const users: Array<User> = [
  { username: 'admin', password: '123', name: 'admin'},
  { username: 'host', password: '123', name: 'host'},
]

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | undefined;
  constructor(private router: Router) { }

  login(form: UserForm) {
    const response =users.find(user => this.matchUser(user, form))

    if (!response) {
      alert('User is not found!');
    } else {
      this.user = response;
      // alert('Hello, ' + this.user.name + '!')
      localStorage.setItem('user', JSON.stringify(response))
      this.router.navigate(['anime'])
    }
  }

  getAuth(): User | undefined {
    const respone = localStorage.getItem('user')
    if (!respone) {
      return undefined;
    } else {
      return JSON.parse(respone);
    }
  }

  matchUser(user: User, form: UserForm): boolean {
    return user.username === form.username && form.password === form.password;
  }
}
