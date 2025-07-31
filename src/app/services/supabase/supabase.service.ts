import { Injectable, signal } from '@angular/core';
import { from, map, Observable, of, tap, timestamp } from 'rxjs';
import { Application } from 'src/app/types/interfaces';
import { supabase } from './supabaseClient';
import dayjs from 'dayjs';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  public applicationList = signal<Application[]>([]);

  recursiveToCamel(item: any): any {
    if (Array.isArray(item)) {
      return item.map(el => this.recursiveToCamel(el));
    } else if (typeof item === 'function' || item !== Object(item)) {
      return item;
    }
    return Object.fromEntries(
      Object.entries(item).map(([key, value]) => [
        key.replace(/([-_][a-z])/gi, c => c.toUpperCase().replace(/[-_]/g, '')),
        this.recursiveToCamel(value),
      ]),
    );
  };

  getApplications(): Observable<Application[]> {
    const timeStampKey = "savedAppTimeStamp";
    const appDataKey = "savedAppData";
    const savedAppTimeStampString = localStorage.getItem(timeStampKey);
    const now = dayjs();

    if (savedAppTimeStampString != null) {
      const savedAppTimeStampDate = dayjs(savedAppTimeStampString);

      // If the data was retrieved less than 30 minutes ago, grab the stored data
      if (now < savedAppTimeStampDate.add(30, 'minutes')) {
        // Grab the application data as JSON
        const savedAppData = localStorage.getItem(appDataKey);
        // Parse the JSON and return either the data or null
        const jsonData: Application[] = savedAppData !== null ? JSON.parse(savedAppData) : null;
        // If the data isn't null, return it as an observable
        if (jsonData !== null){
          this.applicationList.set(jsonData);
          console.log("Loading Applications from localStorage");
          return of(jsonData);
        }
      }
    }

    // Either the initial data was retrieved more than 30 minutes ago, or there was no stored data
    const promise = supabase.from('application_view').select('*');
    return from(promise).pipe(
      map((response) => {
        // The data comes back in the form xxx_xxx
        return this.recursiveToCamel(response.data) ?? [];
      }),
      tap(applications => {
        this.applicationList.set(applications);
        // Add the Application[] to localStorage
        localStorage.setItem(timeStampKey, now.toString());
        localStorage.setItem(appDataKey, JSON.stringify(this.applicationList()));
        console.log("Loading Applications from API server");
      })
      // I need to set the response data to this.applicationList which is a Signal<Application[]>
    );
  }

  addApplication() {
    console.log("Running addApplication");
  }
}
