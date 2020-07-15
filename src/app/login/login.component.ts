import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ManagerService} from '../manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;

  constructor(private service: ManagerService) {}

  ngOnInit() {
    // this.service.getSupervisors().subscribe(
    //   service => {this.users$ = service;
    //     console.log(this.users$); }
    // );
    //
    // this.messageForm = this.formBuilder.group({
    //   username: ['', Validators.compose([Validators.required])],
    //   password: ['', Validators.compose([Validators.required])]
    // });
  }
  // onSubmit() {
  //   this.submitted = true;
  //
  //   if (this.messageForm.invalid) {
  //     return;
  //   }
  //   this.service.authenticate(this.messageForm.value.username, this.messageForm.value.password).subscribe(
  //     service => {this.loggedIn = service;
  //       if (this.loggedIn === true) {
  //         this.router.navigate(['/my']);
  //       }
  //     }
  //   );
  // }
}
