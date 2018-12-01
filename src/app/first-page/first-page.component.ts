import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  date:Date;

  constructor() { }

  ngOnInit() {
    this.date = new Date();
  }

  startDate = new FormControl(new Date(), Validators.required);
}
