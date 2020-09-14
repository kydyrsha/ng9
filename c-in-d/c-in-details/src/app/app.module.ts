import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
