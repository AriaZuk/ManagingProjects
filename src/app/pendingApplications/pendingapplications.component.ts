import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pendingapplications',
  templateUrl: './pendingapplications.component.html',
  styleUrls: ['./pendingapplications.component.scss']
})
export class PendingapplicationsComponent implements OnInit {

  isLoggedIn = true;
  isSupervisorLoggedIn = true;

  constructor() { }

  ngOnInit() {
  }

}
