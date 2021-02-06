import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainServiceService, SignIn } from 'src/app/shared/services/main-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  hide: boolean = true;
  formG: FormGroup;

  constructor(private fb: FormBuilder, private service:MainServiceService) {
    //---Create Forrm---
    this.formG = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['users', Validators.required]
    });
  }

  ngOnInit(): void {
  }

 async saveForm() {
    if (this.formG.valid) {
      
      const obj:SignIn = {
        email: this.formG.get('email')?.value,
        password: this.formG.get('password')?.value,
        role: this.formG.get('role')?.value
      }

      await this.service.signIn(obj);
      
    }
  }
}
