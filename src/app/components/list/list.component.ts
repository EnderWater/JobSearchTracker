import { Component, Input, OnInit } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { ListItem } from 'src/app/types/interfaces';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListItemComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  @Input()
  listItems!: ListItem[]

  constructor() { }

  ngOnInit() {

  }
}
