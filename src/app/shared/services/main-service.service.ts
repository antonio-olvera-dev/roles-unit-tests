import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import ax from "axios";
@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  //TODO cambiar
  // user?:User;
  user: User = {
    email: "Toni@gmail.com",
    rol: "Users",
  };
  constructor(private route: Router) { }

  //---Accesing---
  async signIn(body:SignIn) {
    try {
      const conex = await ax({
        method: 'post',
        url: 'http://localhost:3000/key/signIn',
        data: body
      }).then((data)=>{
        localStorage.setItem('token', `${data.data}`);
        localStorage.setItem('login', `true`);
        this.route.navigate(['/users']);        
      });
    } catch (error) {
      console.log(error);
      localStorage.setItem('token', `0`);
      localStorage.setItem('login', `false`);
    }
  }

  async login(body:Login) {
    try {
      const conex = await ax({
        method: 'post',
        url: 'http://localhost:3000/key/login',
        data: body
      }).then((data)=>{
        localStorage.setItem('token', `${data.data}`);
        localStorage.setItem('login', `true`);
        this.route.navigate(['/users']);        
      });
    } catch (error) {
      console.log(error);
      localStorage.setItem('token', `0`);
      localStorage.setItem('login', `false`);
    }
  }

  async isLogin() {
    try {

    } catch (error) {

    }
  }

  //---Data---
  async setUsers() {
    // try {
    //   const conex = await ax({
    //     method: 'post',
    //     // headers: {'X-Custom-Header': 'foobar'}
    //     url: 'http://localhost:3000/key/signIn',
    //     data: body
    //   }).then((data)=>{
    //     localStorage.setItem('token', `${data.data}`);
    //     this.route.navigate(['/users']);        
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  }

  async setAdmin() {
    try {

    } catch (error) {

    }
  }

  async getUsers() {
    try {

    } catch (error) {

    }
  }

  async getAdmin() {
    try {

    } catch (error) {

    }
  }

}

export interface Tabla {
  position: number,
  email: string,
  rol: string,
  text: string
}

export interface User {
  email: string,
  rol: string,
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
