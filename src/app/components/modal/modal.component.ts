import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal, IonHeader, IonButtons, IonToolbar, IonButton, IonTitle, IonContent, IonItem, IonAvatar, IonImg, IonLabel, IonList, IonInput } from "@ionic/angular/standalone";
import { OverlayEventDetail } from '@ionic/core/components';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  imports: [IonTitle, IonButton, IonModal, IonHeader, IonToolbar, IonButtons, IonContent],
})
export class ModalComponent  implements OnInit {

  @ViewChild(IonModal)
  modal!: IonModal;

  @Input()
  cancelText: string = 'Cancel';

  @Input()
  confirmText: string = 'Confirm';
  
  @Input()
  modalTitle: string = '';

  // If there is any data to be returned from the modal, it will be thrown in here
  // Leave it to whatever component is using the modal to determine the type that will be returned
  modalData: any;

  message: string = '';

  constructor() { }

  ngOnInit() {}

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `Hello, ${event.detail.data}!`;
    }
  }

  confirm() {
    this.modal.dismiss(this.modalData, 'confirm');
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

}
