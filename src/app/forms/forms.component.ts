import { Component, OnInit } from '@angular/core';
import { GenericForm  } from '../models/generic-form';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  title:string="Forms";
  val:string;
  constructor() {
    this.val="";

  }


  public forms: GenericForm[] = [
    {id: "ab889hf89", name: "Contact Us", fields: [["first_name", "ted"], ["last_name", "burns"]]},
    {id: "ab897hgd9", name: "Weight Class Dispute", fields: [["dispute_id", "#43fda"], ["phone_number", "412-606-7377"]]}
  ];
  
  ngOnInit() {
  }

  updateTitle(value: string) {
    console.log(`updateTitle: ${value}`);
    this.title = value;
  }
}