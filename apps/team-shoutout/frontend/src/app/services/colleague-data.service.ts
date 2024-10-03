import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import ColleagueFactory from '../factories/colleague';
import { Colleague } from '../types/colleague';

type Response<TData> = {
  data: TData;
};
@Injectable({
  providedIn: 'root',
})
export class ColleagueDataService {
  http = inject(HttpClient);

  colleagues$: Observable<Colleague[]> = of(COLLEAGUES);

  getAll() {
    return this.http.get<Response<Colleague[]>>('/api/colleagues');
  }

  get(id: number) {
    return COLLEAGUES.find((e) => e.id === id);
  }
}

export const COLLEAGUES: Colleague[] = ColleagueFactory.buildList(12);
