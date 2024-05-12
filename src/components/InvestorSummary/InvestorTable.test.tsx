import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import InvestorSummary from '.';

const investor = {
  firm_id: 101,
  firm_name: 'Global Investments Ltd',
  AUM: 10000000,
  date_added: '2022-01-01',
  last_updated: '2023-01-01',
  established_at: '2000-01-01',
  firm_type: 'Hedge Fund',
  city: 'New York',
  country: 'USA',
  address: '1234 Wall Street, NY',
  postal_code: '10005'
};

describe('InvestorSummary', () => {
  it('displays an investor correctly', () => {
    // When - We render the InvestorSummary component with the investor data.
    render(<InvestorSummary investor={investor} />);

    // Then - The investor's details should be displayed.
    expect(screen.getByText('Global Investments Ltd')).toBeInTheDocument();
    expect(screen.getByText('Hedge Fund')).toBeInTheDocument();
    expect(screen.getByText('1234 Wall Street, NY')).toBeInTheDocument();
  });
});
