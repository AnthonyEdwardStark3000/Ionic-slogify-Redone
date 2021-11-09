import { Component, ViewChild } from '@angular/core';
// import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  posts=[
    {
      title:'one',
      content:'something one'
    },
    {
      title:'two',
      content:'something two'
    },
  ];
  // @ViewChild(IonAccordionGroup, { static: true }) accordionGroup: IonAccordionGroup;
  constructor() {}
    logAccordionValue() {
    // console.log(this.accordionGroup.value);
  }

  closeAccordion() {
    // this.accordionGroup.value = undefined;
  }
}
