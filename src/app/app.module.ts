import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogInputComponent } from './components/blog-input/blog-input.component';
import { BlogService } from './services/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
