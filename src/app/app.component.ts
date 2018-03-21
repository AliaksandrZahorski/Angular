import { Component } from '@angular/core';

import { BlogService } from './blog/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BlogService]
})
export class AppComponent {
  title = 'blogs';
  blogs = [];

  constructor(private blogService: BlogService) {
  }
  
  ngOnInit() {
    this.blogService.addBlog({title: 'Title New'});
    this.blogs = this.blogService.blogs;
  }
}
