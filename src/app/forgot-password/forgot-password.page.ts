import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  submit()
  {
    this.route.navigate(['/verification']);
  }

  back()
  {
    this.route.navigate(['/login']);
  }

}
