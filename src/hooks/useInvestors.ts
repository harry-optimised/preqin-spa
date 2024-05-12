import { useEffect, useState } from 'react';

import { Investor } from '../types';

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

  return { investors };
};

export { useInvestors };
