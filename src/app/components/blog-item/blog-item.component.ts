import { Component, OnInit, Input } from '@angular/core';

import { Blog } from '../../clasess/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  @Input()
  private blog: Blog;
  public countItems: number;

  constructor(private blogService: BlogService) {
    this.countItems = blogService.getBlogs().length;
    console.log(this.countItems);
   }

  ngOnInit() {
  }

  private deleteBlog():void {
    this.blogService.deleteBlog(this.blog.id);
  }

}
