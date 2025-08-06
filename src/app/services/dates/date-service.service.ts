import { Injectable } from '@angular/core';
import dayjs, { Dayjs } from 'dayjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  
  constructor() { }

  public getCurrentDate(): string {
    return dayjs().toString();
  }

  public format(date: string, format: string): string {
    return dayjs(date).format(format).toString();
  }
}
