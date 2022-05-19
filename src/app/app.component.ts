import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

interface Auth {
  token: string;
  username: string;
  profile: Array<string>;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Aula 12';
  site = 'https://shrouded-taiga-44081.herokuapp.com';

  login = 'admin';
  password = '';

  auth = null;

  constructor(private http: HttpClient) {}

  postLogin() {
    this.http
      .post<Auth>(this.site + '/login', {
        login: this.login,
        senha: this.password,
      })
      .subscribe((data) => {
        this.auth = data;
      });
  }

  postLogout() {
    this.auth = null;
  }
}
