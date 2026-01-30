
export type GuaranteeStatus = 'Active' | 'Expired' | 'Pending';
export type GuaranteeType = 'Deposit' | 'Full Coverage' | 'Rent';

export interface Guarantee {
  id: number;
  title: string;
  price: string;
  status: GuaranteeStatus;
  tenant: string;
  type: GuaranteeType;
  period: string;
  disabled: boolean;
}

export interface GuaranteeStats {
  active: number;
  pending: number;
  expired: number;
}

export interface GuaranteeState {
  guarantees: Guarantee[];
  stats: GuaranteeStats;
  loading: boolean;
  error: string | null;
  syncing: boolean;
  lastSync: string | null;
}

export interface CreateGuaranteeRequest {
  title: string;
  price: string;
  tenant: string;
  type: GuaranteeType;
  period: string;
}

export interface DeclareClaimRequest {
  guaranteeId: number;
  description: string;
  amount?: string;
}