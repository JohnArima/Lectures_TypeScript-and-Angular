import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.interface';
import { BlogServiceService } from '../../services/blog-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: {id: number; title: string; description: string; author: string; comments: string[];}[] = [];
  displayedColumns: string[] = ['id','title', 'description', 'author','comments','actions'];

  constructor(private blogService: BlogServiceService) { 
    this.blogs = this.blogService.getBlog();
  }

  ngOnInit(): void {
  }
  executeAction(blog: Blog){
    console.log(blog?.id)
  }
}