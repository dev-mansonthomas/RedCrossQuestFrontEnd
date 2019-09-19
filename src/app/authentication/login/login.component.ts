import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  printUser(event) {
    console.log("logged in");
    console.log(event);
}

printError(event) {
  console.log("logged in error");
    console.error(event);
}
  ngOnInit() {
  }

}
