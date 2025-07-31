import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListComponent } from "src/app/components/list/list.component";
import { SupabaseService } from 'src/app/services/supabase/supabase.service';
import { ListItem } from 'src/app/types/interfaces';
import { AddApplicationComponent } from 'src/app/components/add-application/add-application.component';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.page.html',
  styleUrls: ['./application-list.page.css'],
  standalone: true,
  imports: [CommonModule, 
    FormsModule, 
    ListComponent, 
    ListComponent, 
    AddApplicationComponent]
})
export class ApplicationListPage implements OnInit {
  public applicationsList: ListItem[] = [];
  
  constructor(public supabaseService: SupabaseService) { }

  ngOnInit() {
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
      this.loadTestApplications();
  }

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
}