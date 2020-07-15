import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  isLoggedIn = true;
  isSupervisorLoggedIn = true;
  constructor() { }

  ngOnInit() {
  }

}
