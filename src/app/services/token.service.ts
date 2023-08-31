import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() {}

  setToken(token: string): void {
    try {
      localStorage.removeItem('token');
    }catch (e) {
      console.log(e);
    }

    localStorage.setItem('token',token);
  }

  setUser(email: string): void {
    try {
      localStorage.removeItem('currUser');
    }catch (e) {
      console.log(e);
    }

    localStorage.setItem('currUser',email);
  }

  // setCreatePermission(createPerm: string): void {
  //   try {
  //     localStorage.removeItem('createPermission');
  //   }catch (e) {
  //     console.log(e);
  //   }
  //
  //   localStorage.setItem('createPermission',createPerm);
  // }
  //
  //
  // setDeletePermission(deletePerm: string): void {
  //   try {
  //     localStorage.removeItem('deletePermission');
  //   }catch (e) {
  //     console.log(e);
  //   }
  //
  //   localStorage.setItem('deletePermission',deletePerm);
  // }
  //
  // setUpdatePermission(updatePerm: string): void {
  //   try {
  //     localStorage.removeItem('updatePermission');
  //   }catch (e) {
  //     console.log(e);
  //   }
  //
  //   localStorage.setItem('updatePermission',updatePerm);
  // }
  //
  // setReadPermission(readPerm: string): void {
  //   try {
  //     localStorage.removeItem('readPermission');
  //   }catch (e) {
  //     console.log(e);
  //   }
  //
  //   localStorage.setItem('readPermission',readPerm);
  // }

}
