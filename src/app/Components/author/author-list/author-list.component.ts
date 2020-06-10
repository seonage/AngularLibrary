import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/Models/Author';
import { AuthorService } from 'src/app/Services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: Author[];

  constructor(private authorService:AuthorService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe(data => {
      console.log("first" + this.authors)
      this.authors = data;
      console.log(this.authors)
    });
  }

}
