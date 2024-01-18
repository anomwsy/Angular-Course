import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  formValues : {
    firstname : string,
    lastname : string,
    comment : string,
    subscribe : boolean,
    contactMethod : number | string
  } = {
    firstname : '',
    lastname : '',
    comment : '',
    subscribe : false,
    contactMethod : ""
  }

 onInputHandler(firstname : any){

 }  
 onSubmit(){
   console.log(this.formValues);
 }

 optionContactMethod = [
   {id : 1, name : 'Email'},
   {id : 2, name : 'Phone'},
 ]
}
