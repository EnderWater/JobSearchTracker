import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle } from "@ionic/angular/standalone";
import { Application } from '../../services/list-data-service/list-data.service';

@Component({
  standalone: true,
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle]
})
export class ListItemComponent  implements OnInit {

  // Input is required, but it doesn't need to be set immediately
  @Input()
  application!: Application;
  
  status: string = '';

  constructor() { }

  ngOnInit() { }

}
