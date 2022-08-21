import { Injectable } from '@angular/core';
import { Book } from '../models/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  books = [
    {
      id: 13,
      name: "Alice in Wonderland",
      authors: ["Lewis Carol"],
      isbn: "12312312334"
    },
    {
      id: 123123123,
      name: "Sexy Dance Steps",
      authors: ["Ricardo Millos"],
      isbn: "111222333"
    }
  ]
  constructor() { }

  getBooks(){
    return this.books;
  }

  setBook(dt: Book) {
    this.books.push(dt)
  }

  editBook(dt: Book){
    for(let data of this.books){
      if(data.id === dt.id){
        data.name = dt.name
        data.authors = dt.authors
        data.isbn = dt.isbn
      }
    }
  }
}
