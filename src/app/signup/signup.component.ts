import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    },
      {
        validators: this.mustMatch('password', 'confirm_password')
      })
  }

  signUp() {
    this.http.post<any>('http://localhost:3000/signupUsers', this.signupForm.value)
      .subscribe(res => {
        alert("Signup Successfull");
        this.signupForm.reset();


      },
        err => {
          alert('Somthing went wrong')
        })
  }

  mustMatch(password: any, confirmPassword: any) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['mustmatch']) {
        return
      }
      if (passwordControl.value != confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ mustMatch: true })
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

}
