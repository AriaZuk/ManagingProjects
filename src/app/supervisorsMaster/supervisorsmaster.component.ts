import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supervisorsmaster',
  templateUrl: './supervisorsmaster.component.html',
  styleUrls: ['./supervisorsmaster.component.scss']
})
export class SupervisorsmasterComponent implements OnInit {
  isLoggedIn = true;
  isSupervisorLoggedIn = true;
  constructor() { }

  ngOnInit() {
  }

}
