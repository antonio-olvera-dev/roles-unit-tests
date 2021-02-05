import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './core/admin/admin.component';
import { LoginComponent } from './core/login/login.component';
import { SignInComponent } from './core/sign-in/sign-in.component';
import { UsersComponent } from './core/users/users.component';

const routes: Routes = [
  { path: '', redirectTo:"login",pathMatch: 'full'  },
  { path: 'signIn', component: SignInComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo:"login"  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
