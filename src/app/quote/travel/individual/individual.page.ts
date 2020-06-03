import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.page.html',
  styleUrls: ['./individual.page.scss'],
})
export class IndividualPage implements OnInit {
  form: FormGroup;
  zones = [
    {
      value: ' Worldwide excluding USA & CANADA ', viewValue: ' Worldwide excluding USA & CANADA '
    },
    {
      value: ' Europe ', viewValue: ' Europe '
    },
    {
      value: ' Worldwide ', viewValue: ' Worldwide '
    },
  ]

  periods = [
    {
      value: '7', viewValue: '7 Days'
    },
    {
      value: '10', viewValue: '10 Days'
    },
    {
      value: '15', viewValue: '15 Days'
    },
    {
      value: '21', viewValue: '21 Days'
    },
    {
      value: '30', viewValue: '30 Days'
    }
  ]
  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      zone: new FormControl('', [Validators.required]),
      coverageFrom: new FormControl('', [Validators.required]),
      period: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      coverageTo: new FormControl('', [Validators.required]),
      check: new FormControl(false, [Validators.required])
    });
  }
}
