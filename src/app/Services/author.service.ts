import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { 
    return [
      {
        firstName: "Arthur",
        lastName: "Schopenhauer"
      },
      {
        firstName: "Immanuel",
        lastName: "Kant"
      }
    ]
  }
  
}
