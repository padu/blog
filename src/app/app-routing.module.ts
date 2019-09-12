import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BlogBodyComponent } from './blog-body/blog-body.component';
import { StaticBlog1Component } from './static-blog1/static-blog1.component';

const routes: Routes = [
  { path: 'blog-body', component: BlogBodyComponent },
  { path: 'blog1', component: StaticBlog1Component },
  { path: '',   redirectTo: '/blog-body', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
