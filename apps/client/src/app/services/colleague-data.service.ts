import { Injectable } from '@angular/core';
import ColleagueFactory from '../factories/colleague';
import { Colleague } from '../types/colleague';

@Injectable({
  providedIn: 'root',
})
export class ColleagueDataService {
  constructor() {}

  getColleagues() {
    return COLLEAGUES;
  }

  getColleague(id: number) {
    return COLLEAGUES.find((e) => e.id === id);
  }
}

const COLLEAGUES: Colleague[] = ColleagueFactory.buildList(12);
