import { Injectable } from '@angular/core';
import { GenericForm  } from './models/generic-form.model';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() { }

  async getForms() {
    //Replace this with data from some store 
    let forms: GenericForm[] = [
      {
        id: "ab889hf89", 
        name: "Contact Us",
        fields: [
          ["First Name", ""], 
          ["Last Name", ""], 
          ["Phone Number", ""], 
          ["Comments", ""]]
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

    return forms;
  }
}
