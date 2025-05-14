import { Injectable } from '@angular/core';
import { createClient } from "@supabase/supabase-js";
import { from, map, Observable } from 'rxjs';
import { Application } from 'src/app/types/interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  supabase = createClient(
    environment.supabaseUrl,
    environment.supabaseKey,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      }
    }
  );

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
    const promise = this.supabase.from('application_view').select('*');
    return from(promise).pipe(
      map((response) => {
        return this.recursiveToCamel(response.data) ?? []
      })
    );
  }
}
