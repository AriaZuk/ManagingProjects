import { BrowserModule } from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AvailableProjectsComponent } from './availableProjects/available-projects.component';
import { SupervisorsComponent } from './supervisors/supervisors.component';
import { AddProjectComponent } from './proposeProject/add-project.component';
import { ArchiveComponent } from './archive/archive.component';
import { ManageProjectsComponent } from './manageProjects/manage-projects.component';
import { MasterHomeComponent } from './masterHome/master-home.component';
import { AccountComponent } from './myAccount/account.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HonoursHomeComponent } from './honoursHome/honours-home.component';
import { SigninComponent } from './signin/signin.component';
import { PendingapplicationsComponent } from './pendingApplications/pendingapplications.component';
import { ManagesupervisorsComponent } from './manageSupervisors/managesupervisors.component';
import { AvailableprojectsmasterComponent } from './availableProjectsMaster/availableprojectsmaster.component';
import { SupervisorsmasterComponent } from './supervisorsMaster/supervisorsmaster.component';
import { ProposeprojectmasterComponent } from './proposeProjectMaster/proposeprojectmaster.component';
import { ArchievemasterComponent } from './archiveMaster/archievemaster.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AvailableProjectsComponent,
    SupervisorsComponent,
    AddProjectComponent,
    ArchiveComponent,
    ManageProjectsComponent,
    MasterHomeComponent,
    AccountComponent,
    HonoursHomeComponent,
    SigninComponent,
    PendingapplicationsComponent,
    ManagesupervisorsComponent,
    AvailableprojectsmasterComponent,
    SupervisorsmasterComponent,
    ProposeprojectmasterComponent,
    ArchievemasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
