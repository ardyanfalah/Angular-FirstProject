import { Injectable } from '@angular/core'
import {IUser} from './user'
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService{
    // http: HttpClient;
    userUrl :string;

    
    
    constructor( private http:HttpClient){this.userUrl= 'https://jsonplaceholder.typicode.com/posts';}
    
    getUsers ():Observable<IUser[]> {
        return this.http.get<IUser[]>(this.userUrl);
        
      }
    getUser (id: number):Observable<IUser>{
        
        return this.http.get<IUser>(this.userUrl+'/'+id).pipe(tap(data=>console.log('all ++'+data)));
    }

    updateUser(user:IUser):Observable<any>{
        console.log(user.title)
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          };
        return this.http.put((this.userUrl+'/'+user.id),user,httpOptions).pipe(tap(user=>console.log('All '+user.title)));
        
    }
    
    
}