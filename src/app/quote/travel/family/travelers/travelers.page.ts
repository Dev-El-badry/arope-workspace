import { Component, OnInit } from '@angular/core';
import {QuotePage} from '../quote/quote.page';
import {  SuperTabs } from '@ionic-super-tabs/angular';
import { NgForm, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-travelers',
  templateUrl: './travelers.page.html',
  styleUrls: ['./travelers.page.scss'],
})
export class TravelersPage implements OnInit {
  form: FormGroup;
  types = [
    {
      value: 'supose',
      viewValue: 'Supose'
    },
    {
      value: 'kid',
      viewValue: 'Kid'
    }
  ]
  constructor(private st: SuperTabs, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  onNext() {
    this.st.selectTab(1);
  }

  get Travelers(): FormArray { return this.form.get('travelers') as FormArray; }

  createForm() {
    this.form = new FormGroup({
      travelers: this.fb.array([this.createItem(), this.createItem()])
    })
  }

  createItem(): FormGroup {
    return this.fb.group({
      dob:this.fb.control('', [Validators.required]),
      type:this.fb.control('', [Validators.required])
    });
  }

  onIncrease() {
    this.Travelers.push(this.createItem());
  }

  goToNextTab() {
    this.st.selectTab(1);
  }

  removeField(index: number) {
    const ele = document.getElementById('field-'+index);
    ele.parentNode.removeChild(ele);
  }

}
