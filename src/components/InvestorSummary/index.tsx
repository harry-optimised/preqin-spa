import React from 'react';

import { Pane, Heading, Text } from 'evergreen-ui';

import { Investor } from '../../types';

interface InvestorSummaryProps {
  investor: Investor;
}

function InvestorSummary({ investor }: InvestorSummaryProps) {
  return (
    <Pane display="flex" flexDirection="column">
      <Heading size={600}>{investor.firm_name}</Heading>
      <Text>{investor.firm_type}</Text>
      <Text>{investor.date_added}</Text>
      <Text>{investor.address}</Text>
    </Pane>
  );
}

export default InvestorSummary;
