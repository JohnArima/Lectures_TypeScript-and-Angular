import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../../models/blog.interface';
@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
})


export class BlogItemComponent implements OnInit {

  @Input() blog: {id: number; title: string; description: string; author: string; comments: string[];} | undefined
  @Output() actionEmitter = new EventEmitter<Blog>();
  constructor() {
    
   }

  ngOnInit(): void {
  }

  edit(){
    this.actionEmitter.emit(this.blog)
  }

  deleteButton(){
    this.actionEmitter.emit(this.blog)
  }
}
