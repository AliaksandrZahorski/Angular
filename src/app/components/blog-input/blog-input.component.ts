import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-input',
  templateUrl: './blog-input.component.html',
  styleUrls: ['./blog-input.component.css']
})
export class BlogInputComponent implements OnInit {

  private title: string;
  private autor: string;
  private text: string;

  constructor(private blogService: BlogService) {
    this.title = '';
    this.autor = '';
    this.text = '';
   }

  ngOnInit() {
  }

  saveBlog() {
    this.blogService.addBlog(this.title, this.autor, this.text);
    this.title = '';
    this.autor = '';
    this.text = '';
  }

}
