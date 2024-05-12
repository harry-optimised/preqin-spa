import React from 'react';

import { Table } from 'evergreen-ui';

import { Investor } from '../../types';

export type LinkComponentInterface = React.ComponentType<{ to: string; children: React.ReactNode }>;

interface InvestorListProps {
  investors: Investor[];
  LinkComponent: LinkComponentInterface;
}

function InvestorTable({ investors, LinkComponent }: InvestorListProps) {
  return (
    <Table>
      <Table.Head>
        <Table.TextHeaderCell>FirmId</Table.TextHeaderCell>
        <Table.TextHeaderCell>FirmName</Table.TextHeaderCell>
        <Table.TextHeaderCell>Type</Table.TextHeaderCell>
        <Table.TextHeaderCell>DateAdded</Table.TextHeaderCell>
        <Table.TextHeaderCell>Address</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body height={240}>
        {investors.map((investor) => (
          <Table.Row key={investor.firm_id}>
            <Table.TextCell>
              <LinkComponent to={`/${investor.firm_id}`}>{investor.firm_id}</LinkComponent>
            </Table.TextCell>
            <Table.TextCell>{investor.firm_name}</Table.TextCell>
            <Table.TextCell>{investor.firm_type}</Table.TextCell>
            <Table.TextCell>{investor.date_added}</Table.TextCell>
            <Table.TextCell>{investor.address}</Table.TextCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default InvestorTable;
