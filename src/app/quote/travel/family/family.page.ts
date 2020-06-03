import { Component, OnInit } from '@angular/core';
import {TravelersPage} from './travelers/travelers.page';
import {QuotePage} from './quote/quote.page';
@Component({
  selector: 'app-family',
  templateUrl: './family.page.html',
  styleUrls: ['./family.page.scss'],
})
export class FamilyPage implements OnInit {
  travelersPage = TravelersPage;
  quotePage = QuotePage;
  constructor() { }

  ngOnInit() {
  }

}
