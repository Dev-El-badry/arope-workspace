import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PartnerService } from '../partner.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-partner',
  templateUrl: './create-partner.page.html',
  styleUrls: ['./create-partner.page.scss'],
})
export class CreatePartnerPage implements OnInit {

  constructor(private partnerService: PartnerService, private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  addPartner(form: NgForm) {
    this.partnerService.createCustomer(form.value).subscribe(res=> {
      if(res) {
        this.navCtrl.navigateForward('/partners');
      }
    })
  }

}
