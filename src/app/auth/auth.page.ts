import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import {LoadingController} from '@ionic/angular';
import {NgForm} from '@angular/forms';
import { PartnerService } from '../partners/partner.service';
@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"]
})
export class AuthPage implements OnInit {
  isLoggin = true;
  constructor(
    private auth: AuthService,
    private router: Router,
    
    private partnerService: PartnerService
  ) {}

  ngOnInit() {}

  onLogin() {
    

    this.auth.login();
    this.router.navigateByUrl("");


  }

  onChangeMode() {
    this.isLoggin = !this.isLoggin;
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if (!form.valid) {
      return ;
    }

    this.onLogin();
  }
}