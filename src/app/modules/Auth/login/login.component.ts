import { Component } from '@angular/core';
type formValues = {
  userName : string,
  password : string,
  remamberMe : boolean
} 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formValues : formValues = {
    userName : '',
    password : '',
    remamberMe : false
  }

 onSubmit(){
   console.log(this.formValues);
   alert(JSON.stringify(this.formValues))
 }

 optionContactMethod = [
   {id : 1, name : 'Email'},
   {id : 2, name : 'Phone'},
 ]
}
