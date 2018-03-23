import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-input',
  templateUrl: './blog-input.component.html',
  styleUrls: ['./blog-input.component.css']
})
export class BlogInputComponent implements OnInit {

  private title: string;
  private autor: string;
  private text: string;

  constructor() {
    this.title = '';
    this.autor = '';
    this.text = '';
   }

  ngOnInit() {
  }

  saveBlog() {
    console.log(this.title, this.autor, this.text);
  }

}
