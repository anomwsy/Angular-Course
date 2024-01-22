import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import {UserClass} from '../user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrl: './detail-user.component.scss',
})
export class DetailUserComponent implements OnInit {
  detailForm! : FormGroup;
  id: string | number = '';
  user : UserClass | null = null;
  private _service: UserService;
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, _service : UserService) {
    this._service = _service;
    this.detailForm = this.createForm();
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getUser();
    this.disableForm();
  }

  getUser(){
    this._service.getUserById(this.id as number).subscribe({
      next : (data : any) => {
        this.user = new UserClass(data);
        this.detailForm = this.createForm();
        this.disableForm();
        console.log(data);
      },
      error : (err) => {
        console.log(err);
      }
    });
  }

  createForm() {
    return this.formBuilder.group({
      name: [this.user?.name, Validators.compose([Validators.required])],
      email: [this.user?.email, Validators.compose([Validators.required])],
    });
  }

  

  disableForm(){
    const disableInput = ['name', 'email'];
    for(let i = 0; i < disableInput.length; i++){
      this.detailForm.get(disableInput[i])?.disable();
    }
  }

}
