import { Author } from 'src/app/Models/Author';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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

  
}
