import { colleaguesList } from './colleagues-list';

describe('colleaguesList', () => {
  it('should work', () => {
    expect(colleaguesList().length).toEqual(3);
  });
});
