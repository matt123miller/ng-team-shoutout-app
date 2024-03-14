import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import ColleagueFactory from '../factories/colleague';
import { Colleague } from '../types/colleague';

@Injectable({
  providedIn: 'root',
})
export class ColleagueDataService {
  colleagues$: Observable<Colleague[]> = of(COLLEAGUES);

  getColleague(id: number) {
    return COLLEAGUES.find((e) => e.id === id);
  }
}

const COLLEAGUES: Colleague[] = ColleagueFactory.buildList(12);
