import { Component, OnInit } from '@angular/core';
import { GenericForm  } from '../models/generic-form.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContentPage } from '../models/content-page';
import { FormsService } from '../forms.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent extends ContentPage implements OnInit {
  constructor() {
    super();
    this.title = "Forms";
    this.formsService = new FormsService(); 
  }

  public formsService: FormsService;


  public forms: GenericForm[] = [];

  async ngOnInit() {
    let forms = await this.formsService.getForms();
    this.forms.push(...forms);
  }
}
