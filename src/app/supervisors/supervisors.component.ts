import { Component, OnInit } from '@angular/core';
import {ManagerService} from '../manager.service';

@Component({
  selector: 'app-supervisors',
  templateUrl: './supervisors.component.html',
  styleUrls: ['./supervisors.component.scss']
})
export class SupervisorsComponent implements OnInit {
  isLoggedIn = true;
  isSupervisorLoggedIn = true;

  users: Object;

  constructor(private service: ManagerService) {}
  ngOnInit() {
    this.service.getSupervisors().subscribe(
      service => {
        this.users = service;
        console.log(this.users);
      });
  }
}
