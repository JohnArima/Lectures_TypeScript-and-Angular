import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Blog } from '../../models/blog.interface';
import { BlogServiceService } from '../../services/blog-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: {id: string; title: string; description: string; author: string; comments: string[];}[] = []
  displayedColumns: string[] = ['id','title', 'description', 'author','comments','actions'];

  bookId: Blog | undefined;
  updatedBook: Subscription | undefined;
  private router: Router | undefined;

  constructor(private blogService: BlogServiceService) { 
    this.blogs = this.blogService.getBlog();
  }
  
  
  ngOnInit(): void {
  }

  executeEdit(book:Blog) {
    console.log(book.id);
  }

  executeDelete(book:Blog) {
    console.log(book.id);
  }
}