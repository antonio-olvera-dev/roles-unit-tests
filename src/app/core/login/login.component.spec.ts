import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Login, MainServiceService } from 'src/app/shared/services/main-service.service';


import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[ ReactiveFormsModule, RouterTestingModule ],
      providers:[MainServiceService]
    })
    .compileComponents();
    // const router:Router =  Router.ɵfac();
    // const fb:FormBuilder = new FormBuilder();
    // const service:MainServiceService = new MainServiceService(router);
    
    // component = new LoginComponent(fb, service);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Hide debe ser true', ()=>{
    expect(component.hide).toBe(true);
  });

  it('', async ()=>{

    component.saveForm();
    

  });



});
