import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { CommandBarComponent } from '../shared/components/command-bar/command-bar.component';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';




@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    CommandBarComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FormsModule,
    MatFormFieldModule
  ],
  exports: [BlogListComponent],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ]
})
export class BlogModule { }