import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenctedStatus = false;
  private _userID = 'abc';
  constructor(private odoo: SharedService, private http: HttpClient) { }

  get userID() {
    return this._userID;
  }

  get isAuthenticatedStatus() {
    return this._isAuthenctedStatus;
  }

  login() {
    this._isAuthenctedStatus = true;
  }


  logout() {
    this._isAuthenctedStatus = false;
  }
}