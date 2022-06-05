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
  site = 'https://protected-fortress-44116.herokuapp.com';

  login = 'admin';
  password = '';

  auth = null;

  list = null;

  constructor(private http: HttpClient) {}

  postLogin() {
    this.http
      .post<Auth>(this.site + '/login', {
        login: this.login,
        password: this.password,
      })
      .subscribe((data) => {
        this.auth = data;
      });
    console.log();
  }

  postLogout() {
    this.auth = null;
  }

  getList() {
    this.http
      .get<any>(this.site + '/api/v1/users', {
        headers: { Authorization: 'Bearer ' + this.auth.token },
      })
      .subscribe((data) => {
        this.list = data;
      });
  }
}
