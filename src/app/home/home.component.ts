import { Component, OnInit } from '@angular/core';
import { ContentPage } from '../models/content-page';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends ContentPage implements OnInit {
  
  constructor() {
    super();
    this.title = "Home";
  }

  ngOnInit() {}
}