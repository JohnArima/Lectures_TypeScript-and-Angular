import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book.interface';
import { BookServiceService } from '../../services/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: {id: number; name: string; authors: string[]; isbn: number;}[] = []
  displayedColumns: string[] = ['id','name', 'authors', 'isbn'];

  constructor(private bookService: BookServiceService) {
    this.books = this.bookService.getBooks();
  }
  
  
  ngOnInit(): void {
  }

  executeAction(book: Book){
    console.log(book.id)
  }

}
