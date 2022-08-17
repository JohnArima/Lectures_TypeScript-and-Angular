import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  blogs = [
    {
      id: 1,
      title: "Review of Maid in Malacañang",
      description: "A Full Detailed Review of Maid in Malacañang directed by PDF File",
      author: "John Doenut", 
      comments: ["This is an Extreme Review", "Unbiased Review"]
    },
    {
      id: 2,
      title: "Review of Katips",
      description: "A Full Detailed Review of Katips directed by Vincent M. Tañada",
      author: "Jack O Litto", 
      comments: ["This is an Extreme Review", "Unbiased Review"]
    },
    {
      id: 3,
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