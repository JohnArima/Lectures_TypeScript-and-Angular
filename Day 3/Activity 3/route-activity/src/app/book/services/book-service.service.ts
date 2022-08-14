import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  books = [
    {
      id: 13,
      name: "Alice in Wonderland",
      authors: ["Lewis Carol",],
      isbn: 12312312334
    },
    {
      id: 123123123,
      name: "Sexy Dance Steps",
      authors: ["Ricardo Millos"],
      isbn: 111222333
    }
  ]
  constructor() { }

  getBooks(){
    return this.books;
  }
}
