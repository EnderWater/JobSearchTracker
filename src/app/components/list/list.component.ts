import { Component, OnInit } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { Application, ListDataService } from '../../services/list-data-service/list-data.service';
import { SupabaseService } from 'src/app/services/supabase/supabase.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  implements OnInit {
  public listItems: Application[] = [];

  constructor(private supabaseService: SupabaseService) { }

  ngOnInit() {
    this.supabaseService.getApplications().subscribe((data) => {
      this.listItems = data;
    })
  }
}
