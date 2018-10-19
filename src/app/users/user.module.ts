import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'users', component: UserComponent},
      {path: 'users/:id', component:UserDetailComponent}
    ])
    
  ],
  declarations: [
    UserComponent,
    UserDetailComponent
  ],
  exports: [
    FormsModule,
    CommonModule
  ]
})
export class UserModule { }
