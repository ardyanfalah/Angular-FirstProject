import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { IUser } from './user';
import { UserService } from './user.service';

@Component({
  // selector: 'pm-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  pageTitle : string ='User Edit';
  user : IUser;
  constructor(private route : ActivatedRoute,
              private router :Router,
              private userService: UserService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.getUser(id);
  }

  getUser(id: number) {
    this.userService.getUser(id).subscribe(
      user => this.user = user,
    )
    // console.log("ini  "+this.user)
  }

  saveEdited(): void {
    // console.log(this.user)
    this.userService.updateUser(this.user)
      .subscribe(() => this.onBack());
  }

  onBack(): void{
    this.router.navigate(['/users'])
  }

}
