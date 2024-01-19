import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  detailForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.detailForm = this.createForm();
  }

  onSubmit() {
    this.markFormGroupTouched(this.detailForm);
    if (this.detailForm.valid) {
      const value = this.detailForm.getRawValue();
      console.log(value);
      this.router.navigate(['/']);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
      control.markAsTouched();
    });
  }
  createForm() {
    return this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
      termAndCondition: ['', Validators.compose([Validators.requiredTrue])],
    });
  }

  //  updateSelectedJutsu(event: any) {
  //   const checkbox = event.target;
  //   const value = checkbox.value;

  //   if (checkbox.checked) {
  //     this.formValues.jutsu.push(value);
  //   } else {
  //     const index = this.formValues.jutsu.indexOf(value);
  //     if (index !== -1) {
  //       this.formValues.jutsu.splice(index, 1);
  //     }
  //   }
  // }
}
