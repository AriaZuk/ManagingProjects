import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AvailableProjectsComponent } from './availableProjects/available-projects.component';
import { SupervisorsComponent } from './supervisors/supervisors.component';
import { AddProjectComponent } from './proposeProject/add-project.component';
import { ArchiveComponent } from './archive/archive.component';
import { ManageProjectsComponent } from './manageProjects/manage-projects.component';
import { MasterHomeComponent } from './masterHome/master-home.component';
import { AccountComponent } from './myAccount/account.component';
import {HonoursHomeComponent} from './honoursHome/honours-home.component';
import {SigninComponent} from './signin/signin.component';
import {PendingapplicationsComponent} from './pendingApplications/pendingapplications.component';
import {ManagesupervisorsComponent} from './manageSupervisors/managesupervisors.component';
import {AvailableprojectsmasterComponent} from './availableProjectsMaster/availableprojectsmaster.component';
import {SupervisorsmasterComponent} from './supervisorsMaster/supervisorsmaster.component';
import {ProposeprojectmasterComponent} from './proposeProjectMaster/proposeprojectmaster.component';
import {ArchievemasterComponent} from './archiveMaster/archievemaster.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'availableprojects', component: AvailableProjectsComponent},
  { path: 'supervisors', component: SupervisorsComponent },
  { path: 'proposeProject', component: AddProjectComponent},
  { path: 'archive', component: ArchiveComponent },
  { path: 'manageproject', component: ManageProjectsComponent},
  { path: 'mastershome', component: MasterHomeComponent },
  { path: 'account', component: AccountComponent},
  { path: 'honourshome', component: HonoursHomeComponent },
  { path: 'signin', component: SigninComponent},
  { path: 'pendingApplications', component: PendingapplicationsComponent },
  { path: 'manageSupervisors', component: ManagesupervisorsComponent},
  { path: 'availableProjectsMaster', component: AvailableprojectsmasterComponent},
  { path: 'supervisorsMaster', component: SupervisorsmasterComponent },
  { path: 'proposeProjectMaster', component: ProposeprojectmasterComponent},
  { path: 'archiveMaster', component: ArchievemasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
