import { Component, inject, OnInit } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";
import { SupabaseService } from '../services/supabase/supabase.service';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css'],
  imports: [IonButton],
})
export class AddApplicationComponent  implements OnInit {
  private supabaseService = inject(SupabaseService);

  constructor() { }

  ngOnInit() {}

  addApplication() {
    this.supabaseService.addApplication();
  }

}
