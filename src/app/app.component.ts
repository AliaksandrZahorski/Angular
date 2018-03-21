import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogs';
  blogs = [
    {title: 'Title'},
    {title: 'Title2'},
    {title: 'Title3'},
    {title: 'Title4'},
  ];
}
