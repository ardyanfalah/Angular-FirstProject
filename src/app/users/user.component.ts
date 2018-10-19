import { Component } from '@angular/core';
import {UserService} from './user.service';
import { IUser } from './user';


@Component({
    // selector: 'pm-user',
    templateUrl: './user.component.html',
    providers:[UserService]
})


export class UserComponent {
    pageTitle : string = 'User List';
    data:IUser[] = [];
    constructor(private userService:UserService){
        this.userService.getUsers().subscribe(response=>{
            
            this.data= response;
            console.log(this.data[0].userId);
            
        })
    }
}