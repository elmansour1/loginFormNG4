import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { EnregistrementComponent } from './enregistrement/enregistrement.component';
import { UserComponent } from './user/user.component';

import {UserService} from './user/user.service';

const appRouter: Routes =[
  { path: '', component: LoginFormComponent},
  {path: 'dashbord', component: DashboardComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'help', component: HelpComponent},
  {path: 'enregistrement', component: EnregistrementComponent},
  {path: 'user', component: UserComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    HelpComponent,
    EnregistrementComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(appRouter),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]

})
export class AppModule { }
