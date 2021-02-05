import { Injectable } from '@angular/core';

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
  constructor() { }

  async signIn() {
    try {

    } catch (error) {

    }
  }

  async login() {
    try {

    } catch (error) {

    }
  }

  async isLogin() {
    try {

    } catch (error) {

    }
  }

  async setUsers() {
    try {

    } catch (error) {

    }
  }

  async setAdmin() {
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
