import { emailService } from './email-service';

describe('emailService', () => {
  it('should work', () => {
    expect(emailService()).toEqual('email-service');
  });
});
