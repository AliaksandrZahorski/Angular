import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './blog.component.html'
})

export class BlogComponent {
  @Input() blog;
  
  onClick() {
    console.log('click');
  }
}