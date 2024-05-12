import { useEffect, useState } from 'react';

export type Investor = {
  firm_id: number;
  firm_name: string;
  AUM: number;
  date_added: string;
  last_updated: string;
  established_at: string;
  firm_type: string;
  city: string;
  country: string;
  address: string;
  postal_code: string;
};

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
