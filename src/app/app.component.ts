import { Component } from '@angular/core';
import { IonApp, IonContent, IonHeader, IonFooter, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowForwardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonContent, 
    IonApp, 
    FormsModule,
    RouterOutlet,
    IonHeader,
    IonFooter,
    IonTitle,
    IonToolbar,
  ],
})
export class AppComponent {
  constructor() {
    // Add the ionic icons so they can be used in the app
    addIcons({ arrowForwardOutline });
  }
}
