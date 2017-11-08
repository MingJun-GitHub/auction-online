import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.css']
})
export class ExampleFormComponent implements OnInit {

  formModel: FormGroup = new FormGroup({
    title: new FormControl(),
    dateRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    authors: new FormArray([
      new FormControl('Fuybooo'),
      new FormControl('Fuybooo2'),
    ])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.formModel);
  }
  addAuthor(){
    const authors = this.formModel.get('authors') as FormArray;
    authors.push(new FormControl());
  }
}
