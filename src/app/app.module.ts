import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
// import { SplashScreen, SplashScreenOriginal } from '@ionic-native/splash-screen';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
  declarations: [AppComponent,],
  entryComponents: [],
  imports: [
    BrowserModule, IonicModule.forRoot(),
    AppRoutingModule,
     BrowserAnimationsModule,
     MatExpansionModule,
    ],
  providers: [
    //  StatusBar,
    //  SplashScreen,
    //  SplashScreenOriginal,
    { provide: RouteReuseStrategy,
     useClass: IonicRouteStrategy,
     }],
  bootstrap: [AppComponent],
})
export class AppModule {}
