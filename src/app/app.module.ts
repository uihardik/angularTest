import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';


const appRoutes: Routes = [
   { path: '', component: LandingComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'movie', component: MenuComponentComponent },
  { path: 'register', component: RegisterComponentComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    MenuComponentComponent,
    LandingComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
