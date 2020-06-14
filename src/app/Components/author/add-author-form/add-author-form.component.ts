import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-author-form',
  templateUrl: './add-author-form.component.html',
  styleUrls: ['./add-author-form.component.css']
})
export class AddAuthorFormComponent  {

  constructor(private fb: FormBuilder) { }

  authorForm = this.fb.group({
    firstName: [''],
    lastName: ['']
  })

  onSubmit() {
    console.log("submit");
  }

}
