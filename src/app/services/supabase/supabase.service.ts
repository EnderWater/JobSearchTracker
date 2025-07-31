import { Injectable, signal } from '@angular/core';
import { from, map, Observable, tap } from 'rxjs';
import { Application } from 'src/app/types/interfaces';
import { supabase } from './supabaseClient';

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
    const promise = supabase.from('application_view').select('*');
    return from(promise).pipe(
      map((response) => {
        // The data comes back in the form xxx_xxx
        return this.recursiveToCamel(response.data) ?? []
      }),
      tap(applications => this.applicationList.set(applications))
      // I need to set the response data to this.applicationList which is a Signal<Application[]>
    );
  }

  addApplication() {
    console.log("Running addApplication");
  }
}
