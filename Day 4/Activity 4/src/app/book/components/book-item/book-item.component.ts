import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book.interface';

@Component({
  selector: 'app-book-item', 
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book: {id: number; name: string; authors: string[]; isbn: number;} | undefined
  @Output() actionEmitter = new EventEmitter<Book>();

  constructor() { }
  ngOnInit(): void {
  }


  edit(){
    this.actionEmitter.emit(this.book)
  }

  deleteButton(){
    this.actionEmitter.emit(this.book)
  }
} 
