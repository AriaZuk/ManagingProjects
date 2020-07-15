import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposeprojectmaster',
  templateUrl: './proposeprojectmaster.component.html',
  styleUrls: ['./proposeprojectmaster.component.scss']
})
export class ProposeprojectmasterComponent implements OnInit {
  isLoggedIn = true;
  isSupervisorLoggedIn = true;
  constructor() { }

  ngOnInit() {
  }

}
