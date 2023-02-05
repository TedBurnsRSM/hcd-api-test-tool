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
  private forms: GenericForm[] = [
    {
      id: "ab889hf89", 
      name: "Contact Us",
      fields: [
        ["First Name", "Ted"], 
        ["Last Name", "Burns"], 
        ["Phone Number", "412-606-7377"], 
        ["Comments", "I drove on a road today"]]
    },
    {
      id: "ab897hgd9", 
      name: "Public Speaker Request",
      fields: [
        ["First Name", "Ted"], 
        ["Last Name", "Burns"], 
        ["Event Date", "10/12/2024"], 
        ["Location", "Pittsburgh, PA"],
        ["Special Requests", "None"]]
    },
  ];

  public test: any 

  public submitted: boolean = false;

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

  onSubmit() { 
    this.submitted = true; 
    console.log(this.formFields[0][0] + ' : ' + this.formFields[0][1]);
    console.log(this.formFields[1][0] + ' : ' + this.formFields[1][1]);

  }

  }

  