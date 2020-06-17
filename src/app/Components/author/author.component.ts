import { Component, OnInit, Input } from '@angular/core';
import { Author } from 'src/app/Models/Author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  @Input() author: Author;

  constructor() { }

  ngOnInit(): void {
    //console.log(this.author._id.toString);
  }

}
