import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managesupervisors',
  templateUrl: './managesupervisors.component.html',
  styleUrls: ['./managesupervisors.component.scss']
})
export class ManagesupervisorsComponent implements OnInit {
  isLoggedIn = true;
  isSupervisorLoggedIn = true;
  constructor() { }

  ngOnInit() {
  }

}
