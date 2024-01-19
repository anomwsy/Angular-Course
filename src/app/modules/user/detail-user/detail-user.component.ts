import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import {UserClass} from '../user.model';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrl: './detail-user.component.scss',
})
export class DetailUserComponent implements OnInit {
  id: string | number = '';
  user : UserClass | null = null;
  private _service: UserService;
  constructor(private activatedRoute: ActivatedRoute, _service : UserService) {
    this._service = _service;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getUser();
  }

  getUser(){
    this._service.getUserById(this.id as number).subscribe({
      next : (data : any) => {
        this.user = data;
        console.log(data);
      },
      error : (err) => {
        console.log(err);
      }
    });
  }

}
