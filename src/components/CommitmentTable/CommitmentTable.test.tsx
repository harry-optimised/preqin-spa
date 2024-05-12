import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CommitmentTable from '.';

const commitments = [
  { id: 34728, asset_class: 'pe', firm_id: 2670, currency: 'HKD', amount: '6M' },
  { id: 90806, asset_class: 'pe', firm_id: 2670, currency: 'EUR', amount: '20M' },
  { id: 25276, asset_class: 'pe', firm_id: 2670, currency: 'HKD', amount: '81M' },
  { id: 32957, asset_class: 'pe', firm_id: 2670, currency: 'GBP', amount: '81M' },
  { id: 71636, asset_class: 'pe', firm_id: 2670, currency: 'HKD', amount: '92M' }
];

describe('CommitmentTable', () => {
  test('displays all provided commitments correctly', () => {
    // When - We render the CommitmentTable component with the commitment data.
    render(<CommitmentTable commitments={commitments} />);

    // Then - The commitments' details should be displayed.
    for (const commitment of commitments) {
      expect(screen.getByText(commitment.id.toString())).toBeInTheDocument();
    }

    // Also - Should be 5 lots of 'pe' asset class.
    expect(screen.getAllByText('pe').length).toBe(5);
  });
});
