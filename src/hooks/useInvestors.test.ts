import { Investor, Commitment } from '../types';

describe('useInvestors', () => {
  test('we can instantiate the required datastructure as an Investor type', () => {
    // Given - An example Investor from the spec.
    const investor = {
      firm_id: 2670,
      firm_name: 'Mjd Jedi fund',
      AUM: 426920827,
      date_added: '2010-06-08T00:00:00Z',
      last_updated: '2024-02-21T00:00:00Z',
      established_at: '2010-06-08T00:00:00Z',
      firm_type: 'bank',
      city: 'Hong Kong',
      country: 'China',
      address: '29 Nathan Road, Hong Kong',
      postal_code: '37E'
    };

    // When - We create an instance of the Investor type.
    const investorInstance: Investor = investor;

    // Then - The instance should be created without error.
    expect(investorInstance).toBeDefined();
  });

  test('we can instantiate the required datastructure as a Commitment type', () => {
    // Given - An example Commitment from the spec.
    const commitment = {
      id: 34728,
      asset_class: 'pe',
      firm_id: 2670,
      currency: 'HKD',
      amount: '6M'
    };

    // When - We create an instance of the Commitment type.
    const commitmentInstance: Commitment = commitment;

    // Then - The instance should be created without error.
    expect(commitmentInstance).toBeDefined();
  });
});
