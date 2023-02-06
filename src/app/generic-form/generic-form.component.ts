import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { ContentPage } from '../models/content-page';
import { GenericForm } from '../models/generic-form.model';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})

export class GenericFormComponent extends ContentPage implements OnInit {
  private forms: GenericForm[] = [];

  public formsService: FormsService;

  public submitted: boolean = false;

  public formFields: [string, string][] = []; 
  

  public formResponse: [string, string][] = [];
  public router: Router;

  constructor(private route: ActivatedRoute)  {
  super();
  this.title = "";
  this.router = new Router();
  this.formsService = new FormsService();
   }


 async ngOnInit() {
  let allForms  = await this.formsService.getForms();
  this.forms.push(...allForms);


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
  this.formResponse = this.formFields;
  }

  }

  