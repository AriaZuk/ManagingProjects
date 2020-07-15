import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get('http://localhost:8080/project/getAll');
  }

  getSupervisors(){
    return this.http.get('http://localhost:8080/user/getAll');
  }

  authenticate(username, password) {
    return this.http.get('http://localhost:8080/user/authenticate?username=' + username + '&password=' + password);
  }
}
