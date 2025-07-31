import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IonButton, IonCard } from "@ionic/angular/standalone";

@Component({
  standalone: true,
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  imports: [IonCard, IonButton, FormsModule],
})
export class LoginFormComponent  implements OnInit {
  router: Router = inject(Router);
  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {}

  onLogin(form: NgForm): any {
    this.skipLogin();
  }

  skipLogin() {
    console.log("Skipping the login component!");
    this.router.navigateByUrl('/application-list');
  }

}
