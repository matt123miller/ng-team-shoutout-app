import { createDb } from './db';

describe('db', () => {
  it('should work', () => {
    expect(createDb()).toBeDefined();
  });
});
