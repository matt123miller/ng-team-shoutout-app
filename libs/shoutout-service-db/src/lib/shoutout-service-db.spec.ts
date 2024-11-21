import { shoutoutServiceDb } from './shoutout-service-db';

describe('shoutoutServiceDb', () => {
  it('should work', () => {
    expect(shoutoutServiceDb()).toEqual('shoutout-service-db');
  });
});
