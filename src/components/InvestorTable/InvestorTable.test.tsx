import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import InvestorTable from '.';

const MockLink = ({ to, children }: { to: string; children: React.ReactNode }) => <a href={to}>{children}</a>;

const investors = [
  {
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
  },
  {
    firm_id: 202,
    firm_name: 'Equity Partners',
    AUM: 5000000,
    date_added: '2021-07-15',
    last_updated: '2023-03-15',
    established_at: '1995-08-25',
    firm_type: 'Private Equity',
    city: 'San Francisco',
    country: 'USA',
    address: '987 Market St, SF',
    postal_code: '94103'
  },
  {
    firm_id: 303,
    firm_name: 'Tech Ventures',
    AUM: 7500000,
    date_added: '2020-05-20',
    last_updated: '2023-05-20',
    established_at: '2010-04-10',
    firm_type: 'Venture Capital',
    city: 'Boston',
    country: 'USA',
    address: '33 Innovation Way, Boston',
    postal_code: '02142'
  }
];

describe('InvestorTable', () => {
  test('displays all provided investors correctly', () => {
    render(<InvestorTable investors={investors} LinkComponent={MockLink} />);

    expect(screen.getByText('Global Investments Ltd')).toBeInTheDocument();
    expect(screen.getByText('Equity Partners')).toBeInTheDocument();
    expect(screen.getByText('Tech Ventures')).toBeInTheDocument();
  });

  test('does not display non-expected fields', () => {
    render(<InvestorTable investors={investors} LinkComponent={MockLink} />);

    investors.forEach((investor) => {
      expect(screen.queryByText(investor.AUM.toString())).not.toBeInTheDocument();
      expect(screen.queryByText(investor.city)).not.toBeInTheDocument();
      expect(screen.queryByText(investor.country)).not.toBeInTheDocument();
      expect(screen.queryByText(investor.postal_code)).not.toBeInTheDocument();
    });
  });
});
