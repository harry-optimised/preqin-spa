import React, { useEffect } from 'react';
import './App.css';

import { Routes, Route, Link, useParams } from 'react-router-dom';

import { useInvestors } from './hooks/useInvestors';
import { ASSET_CLASSES } from './definitions';

import { Heading, Pane, SelectField } from 'evergreen-ui';

import InvestorTable, { LinkComponentInterface } from './components/InvestorTable';
import InvestorSummary from './components/InvestorSummary';
import { Commitment } from './types';
import CommitmentTable from './components/CommitmentTable';

function InvestorPage() {
  const { investors } = useInvestors();

  return (
    <Pane padding={16}>
      <Heading size={700}>Investors</Heading>
      <InvestorTable investors={investors} LinkComponent={Link as LinkComponentInterface} />
    </Pane>
  );
}

function InvestorDetailPage() {
  const { investors, fetchCommitments: fetchCommitment } = useInvestors();
  const { id } = useParams();
  const investor = investors.find((i) => i.firm_id === parseInt(id || '', 10));
  const [assetClass, setAssetClass] = React.useState('none');
  const allAssetClasses = ['none', ...Object.keys(ASSET_CLASSES)];
  const [commitments, setCommitments] = React.useState<Commitment[]>([]);

  useEffect(() => {
    if (assetClass !== 'none' && investor) {
      const assetClassCode: string = ASSET_CLASSES[assetClass as keyof typeof ASSET_CLASSES];
      fetchCommitment(assetClassCode, investor.firm_id).then((commitments) => {
        setCommitments(commitments);
      });
    }
  }, [assetClass]);

  if (!investor) {
    return <Pane padding={16}>Investor not found</Pane>;
  }

  return (
    <Pane padding={16}>
      <Link to="/">Back</Link>
      <Pane marginTop={16} />

      <InvestorSummary investor={investor} />
      <Pane marginTop={16} />

      <SelectField
        value={assetClass}
        onChange={(event) => setAssetClass(event.target.value)}
        label="Asset Class"
        description="Show commitment information for chosen asset class."
      >
        {allAssetClasses.map((ac) => (
          <option key={ac} value={ac}>
            {ac}
          </option>
        ))}
      </SelectField>

      {commitments.length > 0 && <CommitmentTable commitments={commitments} />}
    </Pane>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<InvestorPage />} />
      <Route path="/:id" element={<InvestorDetailPage />} />
    </Routes>
  );
}

export default App;
