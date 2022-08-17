import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from '../command-bar.component';
import { BlogItemComponent } from 'src/app/blog/components/blog-item/blog-item.component';
import { BookItemComponent } from 'src/app/book/components/book-item/book-item.component';



@NgModule({
  declarations: [
    CommandBarComponent,
    BlogItemComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule,
    CommandBarComponent
  ]
})
export class SharedCommandBarModule { }
