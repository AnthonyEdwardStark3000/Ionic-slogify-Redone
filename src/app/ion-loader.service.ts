import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonLoaderService {

  constructor( public loadingController: LoadingController) { }


  // Auto hide show loader
  autoLoader() {
    this.loadingController.create({
      message: 'Loading..',
      duration: 400
    }).then((response) => {
      response.present();
      // eslint-disable-next-line @typescript-eslint/no-shadow
      response.onDidDismiss().then((response) => {
        console.log('Loader dismissed', response);
      });
    });
  }


}
