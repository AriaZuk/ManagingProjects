import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archievemaster',
  templateUrl: './archievemaster.component.html',
  styleUrls: ['./archievemaster.component.scss']
})
export class ArchievemasterComponent implements OnInit {
  isLoggedIn = true;
  isSupervisorLoggedIn = true;

  constructor() { }

  ngOnInit() {
  }

}
