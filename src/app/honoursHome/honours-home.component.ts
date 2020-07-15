import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-honours-home',
  templateUrl: './honours-home.component.html',
  styleUrls: ['./honours-home.component.scss']
})
export class HonoursHomeComponent implements OnInit {
  isLoggedIn = true;
  isSupervisorLoggedIn = true;

  constructor() { }

  ngOnInit() {
  }

}
