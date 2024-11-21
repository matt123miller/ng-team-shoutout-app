import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface SleepRecord {
  id: number;
  startTime: Date;
  endTime: Date | null;
  duration: string;
}

@Injectable({
  providedIn: 'root'
})
export class SleepService {
  private STORAGE_KEY = 'sleepRecords';
  private sleepRecordsSubject = new BehaviorSubject<SleepRecord[]>([]);
  
  constructor() {
    this.loadFromStorage();
  }

  get sleepRecords$(): Observable<SleepRecord[]> {
    return this.sleepRecordsSubject.asObservable();
  }

  addRecord(record: SleepRecord): void {
    const currentRecords = this.sleepRecordsSubject.value;
    const updatedRecords = [record, ...currentRecords];
    this.sleepRecordsSubject.next(updatedRecords);
    this.saveToStorage(updatedRecords);
  }

  private loadFromStorage(): void {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      const records = JSON.parse(saved).map((record: any) => ({
        ...record,
        startTime: new Date(record.startTime),
        endTime: record.endTime ? new Date(record.endTime) : null
      }));
      this.sleepRecordsSubject.next(records);
    }
  }

  private saveToStorage(records: SleepRecord[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(records));
  }
}