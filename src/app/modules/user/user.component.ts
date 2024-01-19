import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  users : any[] = [];
  router : Router;
  constructor(private _service : UserService, router : Router) { 
    this.router = router;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this._service.getAllData()
    .subscribe({
      next : (data : any) => {
        this.users = data;
        console.log(data);
      },
      error : (err) => {
        console.log(err);
      }
    });
  }

  selectUser(id : number | string){
      this.router.navigate(['/user/', id]);
  }
}
