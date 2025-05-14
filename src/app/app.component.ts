import { Component } from '@angular/core';
import { IonApp, IonContent } from '@ionic/angular/standalone';
import { ListComponent } from './components/list/list.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LoginComponent } from "./pages/login/login.component";
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonContent, IonApp, ListComponent, HeaderComponent, FooterComponent, LoginComponent, FormsModule],
})
export class AppComponent {
  constructor() {}
}
