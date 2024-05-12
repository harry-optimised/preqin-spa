import { useEffect, useState } from 'react';

import { Commitment, Investor } from '../types';

// A simple in-memory cache
let cache: Investor[] | null = null;

const useInvestors = () => {
  const [investors, setInvestors] = useState<Investor[]>([]);

  useEffect(() => {
    if (cache !== null) {
      setInvestors(cache);
    } else {
      fetch('http://localhost:8000/api/investors', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((data) => {
          setInvestors(data);
          cache = data;
        });
    }
  }, []);

  const fetchCommitments = async (assetClass: string, investorId: number): Promise<Commitment[]> => {
    const response = await fetch(`http://localhost:8000/api/investor/commitment/${assetClass}/${investorId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  };

  return { investors, fetchCommitments };
};

export { useInvestors };
