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
    return this.http.post<Author>(this.url, author, httpOptions).subscribe();
  }

  public deleteAuthor(author:Author):Observable<Author> {
    const authorUrl = `${this.url}/${author.id}`
    console.log(authorUrl);
    return this.http.delete<Author>(authorUrl, httpOptions);
  }
}
