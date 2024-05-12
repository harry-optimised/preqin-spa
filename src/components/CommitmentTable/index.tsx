import React from 'react';

import { Table } from 'evergreen-ui';

import { Commitment } from '../../types';

interface CommitmentTableProps {
  commitments: Commitment[];
}

function CommitmentTable({ commitments }: CommitmentTableProps) {
  return (
    <Table>
      <Table.Head>
        <Table.TextHeaderCell>Id</Table.TextHeaderCell>
        <Table.TextHeaderCell>Asset Class</Table.TextHeaderCell>
        <Table.TextHeaderCell>Firm Id</Table.TextHeaderCell>
        <Table.TextHeaderCell>Currency</Table.TextHeaderCell>
        <Table.TextHeaderCell>Amount</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body height={240}>
        {commitments.map((commitment) => (
          <Table.Row key={commitment.id}>
            <Table.TextCell>{commitment.id}</Table.TextCell>
            <Table.TextCell>{commitment.asset_class}</Table.TextCell>
            <Table.TextCell>{commitment.firm_id}</Table.TextCell>
            <Table.TextCell>{commitment.currency}</Table.TextCell>
            <Table.TextCell>{commitment.amount}</Table.TextCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default CommitmentTable;
