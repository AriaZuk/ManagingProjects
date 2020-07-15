import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.scss']
})
export class ManageProjectsComponent implements OnInit {

  isLoggedIn = true;
  isSupervisorLoggedIn = true;

  constructor( ) { }

  ngOnInit() {
  }

}
