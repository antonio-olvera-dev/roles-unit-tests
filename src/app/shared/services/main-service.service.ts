import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import ax from "axios";
@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  user: User = {
    email: "",
    role: ""
  };
  constructor(private route: Router) { }

  //---Accesing---
  async signIn(body: SignIn) {
    try {
      const conex = await ax({
        method: 'post',
        url: 'http://localhost:3000/key/signIn',
        data: body
      });

      localStorage.setItem('token', `${conex.data.token}`);
      localStorage.setItem('login', `true`);
      this.user = {
        email: conex.data.email,
        role: conex.data.role
      };
      this.route.navigate(['/users']);

    } catch (error) {
      console.log(error);
      localStorage.setItem('token', `0`);
      localStorage.setItem('login', `false`);
    }
  }

  async login(body: Login) {
    try {
      const conex = await ax({
        method: 'post',
        url: 'http://localhost:3000/key/login',
        data: body
      });

      localStorage.setItem('token', `${conex.data.token}`);
      localStorage.setItem('login', `true`);
      this.user = {
        email: conex.data.email,
        role: conex.data.role
      };
      this.route.navigate(['/users']);

    } catch (error) {
      console.log(error);
      localStorage.setItem('token', `0`);
      localStorage.setItem('login', `false`);
    }
  }

   isLogin():boolean {
    try {
      const login = localStorage.getItem('login');
      if (login != 'true') {
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  //---Data---
  async setUsers(body:Tabla) {
    try {
      const token:string |null = localStorage.getItem('token');
      const conex = await ax({
        method: 'post',
        url: 'http://localhost:3000/users',
        headers: {'authoritation': `${token}`},
        data: {
          email: body.email,
          role: body.role,
          text: body.text
        }
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }

  }

  async setAdmin(body:Tabla) {
    try {
      const token:string |null = localStorage.getItem('token');
      const conex = await ax({
        method: 'post',
        url: 'http://localhost:3000/admin',
        headers: {'authoritation': `${token}`},
        data: {
          email: body.email,
          role: body.role,
          text: body.text
        }
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }

  }

  async getUsers() {
    try {
      const token:string | null = localStorage.getItem('token');
      const conex = await ax({
        method: 'get',
        url: 'http://localhost:3000/users',
        headers: {'authoritation': `${token}`}
      });
      return conex.data;

    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getAdmin() {
    try {
      const token:string | null = localStorage.getItem('token');
      const conex = await ax({
        method: 'get',
        url: 'http://localhost:3000/admin',
        headers: {'authoritation': `${token}`}
      });
      return conex.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

}

export interface Tabla {
  position: number,
  email: string,
  role: string,
  text: string
}

export interface User {
  email: string,
  role: string,
}


export interface Login {
  email: string,
  password: string,
}


export interface SignIn {
  email: string,
  password: string,
  role: string
}
