import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  blogs = [
    {
      id: 1,
      title: "Test Title",
      description: "Test Description",
      author: "Test Author", 
      comments: ["This is a Test Comment"]
    },
    {
      id: 2,
      title: "Test Title",
      description: "Test Description",
      author: "Test Author", 
      comments: ["This is a Test Comment"]
    },
    {
      id: 12,
      title: "Test Title",
      description: "Test Description",
      author: "Test Author", 
      comments: ["This is a Test Comment"]
    }
  ]
  constructor() { }

  getBlog(){
    return this.blogs;
  }
}
