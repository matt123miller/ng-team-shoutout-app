import { afterRender, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

export interface SleepRecord {
  id: number;
  startTime: Date;
  endTime: Date | null;
  duration: string;
}

@Injectable({
  providedIn: 'root',
})
export class SleepService {
  private STORAGE_KEY = 'sleepRecords';
  private sleepRecordsSubject = new BehaviorSubject<SleepRecord[]>([]);

  constructor(private localStorageService: LocalStorageService) {
    afterRender(() => {
      this.loadFromStorage();
    });
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
    const savedRecords = this.localStorageService.load<SleepRecord[]>(
      this.STORAGE_KEY
    );
    if (!savedRecords) {
      return;
    }

    const records = savedRecords.map((record) => ({
      ...record,
      startTime: new Date(record.startTime),
      endTime: record.endTime ? new Date(record.endTime) : null,
    }));
    this.sleepRecordsSubject.next(records);
  }

  private saveToStorage(records: SleepRecord[]): void {
    this.localStorageService.save(this.STORAGE_KEY, records);
  }
}
