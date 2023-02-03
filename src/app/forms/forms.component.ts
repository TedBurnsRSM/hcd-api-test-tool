import { Component, OnInit } from '@angular/core';
import { GenericForm  } from '../models/generic-form.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContentPage } from '../models/content-page';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent extends ContentPage implements OnInit {
  constructor() {
    super();
    this.title = "Forms";
  }

  public forms: GenericForm[] = [
    {id: "ab889hf89", name: "Contact Us", fields: [["first_name", "ted"], ["last_name", "burns"]]},
    {id: "ab897hgd9", name: "Weight Class Dispute", fields: [["dispute_id", "#43fda"], ["phone_number", "412-606-7377"]]}
  ];

  ngOnInit() {

  }
}
