import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IonButton, IonCard } from "@ionic/angular/standalone";

@Component({
  standalone: true,
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [IonCard, IonButton, FormsModule],
})
export class LoginFormComponent  implements OnInit {

  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {}

  onLogin(form: NgForm): any {

  }

}
