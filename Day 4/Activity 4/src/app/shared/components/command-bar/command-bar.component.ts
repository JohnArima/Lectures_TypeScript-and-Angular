import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from 'src/app/blog/models/blog.interface';


@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {
  @Input() blog: {id: number; title: string; description: string; author: string; comments: string[];} | undefined
  @Input() book: {id: number; name: string; authors: string[]; isbn: number;} | undefined
  @Output() actionEmitter = new EventEmitter<Blog>();
  @Output() actionEmitter2 = new EventEmitter<Blog>();
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.actionEmitter.emit(this.blog)
  }

  deleteAll(){
    this.actionEmitter.emit(this.blog)
  }
}
