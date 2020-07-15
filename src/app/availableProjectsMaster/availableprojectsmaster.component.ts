import { Component, OnInit } from '@angular/core';
import {ManagerService} from '../manager.service';

@Component({
  selector: 'app-availableprojectsmaster',
  templateUrl: './availableprojectsmaster.component.html',
  styleUrls: ['./availableprojectsmaster.component.scss']
})
export class AvailableprojectsmasterComponent implements OnInit {
  isLoggedIn = true;
  isSupervisorLoggedIn = true;
  projects: Object;

  constructor(private service: ManagerService) {}

  ngOnInit() {
    this.service.getProjects().subscribe(
      service => {
        this.projects = service;
        console.log(this.projects);
      });
  }

}
