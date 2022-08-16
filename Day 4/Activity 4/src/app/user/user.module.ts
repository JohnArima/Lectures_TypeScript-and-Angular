import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldErrorExample, ProfileComponent } from './pages/profile/profile.component';
import { FormComponent } from './components/form/form.component';
import { UserRoutingModule } from './user-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldControl, MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  declarations: [
    ProfileComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
  ],
  exports: [ProfileComponent],
  bootstrap: [FormFieldErrorExample]
})
export class UserModule { }
