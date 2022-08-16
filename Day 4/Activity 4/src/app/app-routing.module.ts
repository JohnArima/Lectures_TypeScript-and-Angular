import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "blog",
    redirectTo: "./blog/blog.module"

  },
  {
    path: "book",
    loadChildren: () => import("./book/book.module").then(m => m.BookModule)
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 