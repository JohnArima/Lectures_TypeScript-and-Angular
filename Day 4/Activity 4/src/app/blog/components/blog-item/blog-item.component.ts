import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../../models/blog.interface';
import { BlogServiceService } from '../../services/blog-service.service';
@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
})


export class BlogItemComponent implements OnInit {
  @Input() blog: Blog | undefined
  blogs: {id: number; name: string; authors: string[]; isbn: string;}[] = []
  @Output() editEmitter = new EventEmitter<Blog>();
  @Output() deleteEmitter = new EventEmitter<Blog>();

  constructor(private route: Router, private books: BlogServiceService) { }

  ngOnInit(): void {
  }

  edit(){
    this.editEmitter.emit(this.blog)
  }

  deleteButton(){
    this.deleteEmitter.emit(this.blog)
  }
}
