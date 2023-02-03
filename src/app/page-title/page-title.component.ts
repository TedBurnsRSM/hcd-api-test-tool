import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnChanges{
  @Input() title: string = "";
  @Output() titleChanged: EventEmitter<string> = new EventEmitter<string>();
  constructor() { 
  }
  ngOnChanges(){
    console.log(this.title);
    this.titleChanged.emit(this.title);
    } 
  
}
