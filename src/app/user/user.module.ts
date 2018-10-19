import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'user', component: UserComponent},
      {path: 'user/:id', component:UserDetailComponent}
    ]),
    CommonModule
    
  ],
  declarations: [
    UserComponent,
    UserDetailComponent
  ]
})
export class UserModule { }
