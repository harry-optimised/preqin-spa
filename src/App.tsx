import React from 'react';
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';

import { useInvestors } from './hooks/useInvestors';

import { Heading, Pane } from 'evergreen-ui';

import InvestorTable from './components/InvestorTable';
import { LinkComponentInterface } from './components/InvestorTable';

function InvestorPage() {
  const { investors } = useInvestors();

  return (
    <Pane padding={16}>
      <Heading size={700}>Investors</Heading>
      <InvestorTable investors={investors} LinkComponent={Link as LinkComponentInterface} />
    </Pane>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<InvestorPage />} />
    </Routes>
  );
}

export default App;
