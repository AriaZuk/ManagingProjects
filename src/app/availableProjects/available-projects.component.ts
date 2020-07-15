import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {ManagerService} from '../manager.service';

@Component({
  selector: 'app-available-projects',
  templateUrl: './available-projects.component.html',
  styleUrls: ['./available-projects.component.scss']
})
export class AvailableProjectsComponent implements OnInit {
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
