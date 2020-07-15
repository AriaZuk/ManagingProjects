import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-home',
  templateUrl: './master-home.component.html',
  styleUrls: ['./master-home.component.scss']
})
export class MasterHomeComponent implements OnInit {
  isLoggedIn = true;
  isSupervisorLoggedIn = true;

  constructor() { }

  ngOnInit() {
  }

}
