import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  divStyle = 'sign-in-mode';

  constructor() {

  }

  ngOnInit(): void {

  }

  toggleChange(): void {
    if (this.divStyle == 'sign-up-mode') {
      this.divStyle = 'sign-in-mode';
    } else {
      this.divStyle = 'sign-up-mode';
    }
  }
}
