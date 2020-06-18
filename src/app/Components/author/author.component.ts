import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Author } from 'src/app/Models/Author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  @Input() author: Author;
  @Output() deleteAuthor: EventEmitter<Author> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onDelete(author) {
    this.deleteAuthor.emit(author);
    location.reload();
  }

}
