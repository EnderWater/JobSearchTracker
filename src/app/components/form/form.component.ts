import { Component, OnInit, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonList, IonItem, IonInput } from "@ionic/angular/standalone";
import { FormItem } from 'src/app/types/interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [IonInput, IonItem, IonList, ReactiveFormsModule],
})
export class FormComponent  implements OnInit {

  readonly formItems = input<FormItem[]>([]);
  formControls: FormControl[] = [];

  constructor() {
    this.formItems().forEach(formItem => {
      this.formControls.push(new FormControl(formItem.label));
    });
   }

  ngOnInit() {}

}
