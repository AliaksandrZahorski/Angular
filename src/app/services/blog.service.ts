import { Injectable } from '@angular/core';
import { Blog } from '../clasess/blog';

@Injectable()
export class BlogService {

  private blogs: Blog[];
  private id: number = 0;

  constructor() {
    this.blogs = [
      new Blog(this.id, "title", "author", "text"),
    ];
    this.id++;
  }
  public addBlog(title: string, autor: string, text: string): void {
    this.blogs.push(new Blog(this.id, title, autor, text));
    this.id++;
  }

  public getBlogs(): Blog[] {
    return this.blogs;
  }

  public deleteBlog(id: number): void {
    this.blogs = this.blogs.filter( b => b.id !== id);
  }
  public getCount(): number {
    return this.blogs.length;
  }
}
