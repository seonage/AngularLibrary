import { Author } from 'src/app/Models/Author';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private url:string = 'http://localhost:8080/authors';

  constructor(private http:HttpClient) { 
    
  }


  public getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.url);
  }

  public saveAuthor(author: String) {
    //let jsonAuthor = JSON.parse(JSON.stringify(author));
    //console.log(jsonAuthor);
    return this.http.post<Author>(this.url, author, httpOptions).subscribe();
  }
}
