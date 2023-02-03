import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContentPage } from '../models/content-page';
import { GenericForm } from '../models/generic-form.model';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})

export class GenericFormComponent extends ContentPage implements OnInit {
  // public selectedForm: GenericForm;
  private forms: GenericForm[] = [
    {
      id: "ab889hf89", 
      name: "Contact Us",
      fields: [["first_name", "ted"], ["last_name", "burns"], ["phone_number", "412-606-7377"], ["comments", "I drove on a road today"]]},
    {id: "ab897hgd9", 
    name: "Weight Class Dispute",
     fields: [["dispute_id", "#43fda"], ["first_name", "ted"], ["last_name", "burns"], ["phone_number", "412-606-7377"], ["license_no", "NJd3fdsau"], ["Date of Incident", "12/04/2021"]]}
  ];

  public formFields: [string, string][] = []; 

 
  public formData: FormGroup = new FormGroup({});

  constructor(private route: ActivatedRoute)  {
    super();
    this.title = "";
   }


 ngOnInit() {
    let formId: string; 
    this.route.paramMap.subscribe((params: ParamMap) => {
      formId = params.get('id') || "";
    });

    let selectedForm = this.forms.filter(function (item) {
      return item.id === formId;
    })[0] || {id: "", name: "", fields: []};

    this.title = selectedForm.name;

    for(let field of selectedForm.fields) {
      this.formFields.push(field);
    }
 }

  onSubmit() {}
  
  }

  