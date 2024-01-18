import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

 onInputHandler(firstname : any){

 }  
 onSubmit(value : any){
   console.log(value);
 }
}
