import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogBodyComponent } from './blog-body/blog-body.component';
import { StaticBlog1Component } from './static-blog1/static-blog1.component';

import { DisqusModule } from 'ngx-disqus';

@NgModule({
  declarations: [
    AppComponent,
    BlogBodyComponent,
    StaticBlog1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DisqusModule.forRoot('https-padu-github-io-blog')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
