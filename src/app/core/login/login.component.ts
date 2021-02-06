import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login, MainServiceService } from 'src/app/shared/services/main-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  hide: boolean = true;
  formG: FormGroup;

  constructor(private fb: FormBuilder, private service: MainServiceService) {
    //---Create Forrm---
    this.formG = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

 async saveForm() { 
    if (this.formG.valid) {
          
      const obj:Login = {
        email: this.formG.get('email')?.value,
        password: this.formG.get('password')?.value
      }

      await this.service.login(obj);
      
    }
  }


}
