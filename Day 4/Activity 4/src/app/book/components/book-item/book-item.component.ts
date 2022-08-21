import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book.interface';
import { BookServiceService } from '../../services/book-service.service';



export type EditorType = 'bookForm';

@Component({
  selector: 'app-book-item', 
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book | undefined
  @Output() editEmitter = new EventEmitter<Book>();
  @Output() deleteEmitter = new EventEmitter<Book>();

  constructor(private route: Router, private books: BookServiceService) { }

  ngOnInit(): void {
  }

  edit(){
    this.editEmitter.emit(this.book)
  }

  deleteButton(){
    this.deleteEmitter.emit(this.book)
  }
  
  

} 

