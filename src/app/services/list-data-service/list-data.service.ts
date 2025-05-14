import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from 'src/app/types/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ListDataService {

  constructor(private http: HttpClient) { }

  getJsonData(): Observable<Application[]> {
    return this.http.get<Application[]>('assets/list-data.json');
  }
}
export { Application };

