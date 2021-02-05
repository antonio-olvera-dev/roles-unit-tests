import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  hide: boolean = true;
  formG: FormGroup;

  constructor(private fb: FormBuilder) {
    //---Create Forrm---
    this.formG = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['users', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  saveForm() {
    if (this.formG.valid) {
      console.log(this.formG);
      
    }
  }
}
