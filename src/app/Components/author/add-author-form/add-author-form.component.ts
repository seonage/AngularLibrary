import { Component, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthorService } from 'src/app/Services/author.service';

@Component({
  selector: 'app-add-author-form',
  templateUrl: './add-author-form.component.html',
  styleUrls: ['./add-author-form.component.css']
})
export class AddAuthorFormComponent  {

  constructor(private fb: FormBuilder, private authorService: AuthorService) { }

  authorForm = this.fb.group({
    firstName: [''],
    lastName: ['']
  })

  onSubmit() {
    let formObj = this.authorForm.getRawValue();
    let jsonAuthor = JSON.stringify(formObj);
    this.authorService.saveAuthor(jsonAuthor);
  }

}
