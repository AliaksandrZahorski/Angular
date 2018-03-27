import { Component } from '@angular/core';

import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  constructor(private blogService: BlogService) {
  }
  
  ngOnInit() {
  }
}
