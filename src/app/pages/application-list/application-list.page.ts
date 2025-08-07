import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListComponent } from "src/app/components/list/list.component";
import { SupabaseService } from 'src/app/services/supabase/supabase.service';
import { FormItem, ListItem } from 'src/app/types/interfaces';
import { environment } from 'src/environments/environment.development';
import { IonButton } from "@ionic/angular/standalone";
import { ModalComponent } from "src/app/components/modal/modal.component";
import { FormComponent } from "src/app/components/form/form.component";

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.page.html',
  styleUrls: ['./application-list.page.css'],
  standalone: true,
  imports: [IonButton, CommonModule,
    FormsModule,
    ListComponent,
    ListComponent, ModalComponent, FormComponent]
})
export class ApplicationListPage implements OnInit {
  public applicationsList: ListItem[] = [];
  public formItemList: FormItem[] = [];
  public modalTitle = 'New Application';
  
  constructor(public supabaseService: SupabaseService) { }

  async ngOnInit() {
    if (environment.production) {
      // Get the applications from supabase
      this.supabaseService.getApplications().subscribe(() => {
        // Iterate over each of the applications and turn them into ListItems for rendering
        this.supabaseService.applicationList().forEach((application) => {
          let newListItem: ListItem = {
            title: application.company.name,
            date: application.submissionDate,
            isActive: true,
            color: application.applicationStatus?.name
          }
          this.applicationsList.push(newListItem);
        })
      })
    }
    else
      await this.loadTestApplications();

    // TODO:
    // Turn this into some kind of file service later...
    await this.loadFormData();
  }

  // You could throw this into a file service to help handle
  // opening, writing, and saving to files...
  async loadTestApplications() {
    fetch("../../../assets/test-list-data.json")
    .then((fileData) =>
      fileData.text()
    )
    .then((text: string) => {
      this.applicationsList = JSON.parse(text);
    })
    .catch((e) => console.error(e))
  }

  async loadFormData() {
    fetch("../../../assets/forms/addApplicationForm.json")
    .then((fileData) =>
      fileData.text()
    )
    .then((text: string) => {
      this.formItemList = JSON.parse(text);
    })
    .catch((e) => console.error(e))
  }
}