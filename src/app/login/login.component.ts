import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 export class LoginComponent {
    loginForm = this.fb.group({
         email: ['', [Validators.required, Validators.email]],
         name:  ['', [Validators.required]],
         phoneno:  ['', [Validators.required]],
         address:  ['', [Validators.required]],
// userName: string | undefined;
// address: string | undefined;
// email: string | undefined;
// phoneNo: string | undefined;

  });
   constructor(private fb: FormBuilder) {

  }
 }



