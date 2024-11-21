import { Injectable } from '@angular/core';

// Theoretically I could make a type that makes all key values a string to represent having loaded the data from storage.
// Then calles would know they have to do some parsing to get the data they need.
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private STORAGE_KEY = 'BABY_TRACKER_';

  load<T>(key: string): T | null {
    const saved = localStorage.getItem(this.STORAGE_KEY + key);
    if (saved) {
      return JSON.parse(saved);
    }
    return null;
  }

  save<T>(key: string, value: T): void {
    localStorage.setItem(this.STORAGE_KEY + key, JSON.stringify(value));
  }
}
