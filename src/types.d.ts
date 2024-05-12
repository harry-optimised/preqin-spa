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

export type Commitment = {
  id: number;
  asset_class: string;
  firm_id: number;
  currency: string;
  amount: string;
};
