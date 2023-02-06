import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnChanges {
  @Input() responseContent: [string, string][]
  constructor() { 
    this.responseContent = new Array();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
