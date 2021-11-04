import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { IonLoaderService } from '../ion-loader.service';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'],
})
export class MainpagePage implements OnInit {

  myDate= moment().format();

  constructor(private ionLoaderService: IonLoaderService,private route: Router) { }

  ngOnInit() {
  }

  next()
  {
   this.ionLoaderService.autoLoader();
   this.route.navigate(['/login']);
    }

displayAutoLoader() {
    this.ionLoaderService.autoLoader();
  }


}
