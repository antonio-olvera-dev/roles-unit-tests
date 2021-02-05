import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  hide: boolean = true;
  formG: FormGroup;

  constructor(private fb: FormBuilder) {
    //---Create Forrm---
    this.formG = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
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
