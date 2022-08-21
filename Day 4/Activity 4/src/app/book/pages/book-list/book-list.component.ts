import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../../models/book.interface';
import { BookServiceService } from '../../services/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: {id: number; name: string; authors: string[]; isbn: string;}[] = []
  displayedColumns: string[] = ['id','name', 'authors', 'isbn','actions'];

  bookId: Book | undefined;
  updatedBook: Subscription | undefined;
  private router: Router | undefined;

  constructor(private bookService: BookServiceService) { 
    this.books = this.bookService.getBooks();
  }
  
  
  ngOnInit(): void {
  }

  executeEdit(book:Book) {
    console.log(book.id);
  }

  executeDelete(book:Book) {
    console.log(book.id);
  }

}
