/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  Guarantee,
  CreateGuaranteeRequest,
  DeclareClaimRequest,
} from '@/types/guarantees';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';


type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const json: ApiResponse<T> = await res
    .json()
    .catch(() => ({ success: false } as ApiResponse<T>));

  if (!res.ok || !json.success) {
    throw new Error(json.message || 'API request failed');
  }

  return json.data;
}


export const getGuarantees = () =>
  apiRequest<{ guarantees: Guarantee[] }>('/guarantees');

export const getGuaranteeById = (id: number) =>
  apiRequest<Guarantee>(`/guarantees/${id}`);

export const createGuarantee = (data: CreateGuaranteeRequest) =>
  apiRequest<Guarantee>('/guarantees', {
    method: 'POST',
    body: JSON.stringify(data),
  });

export const updateGuarantee = (
  id: number,
  data: Partial<Guarantee>
) =>
  apiRequest<Guarantee>(`/guarantees/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });

export const deleteGuarantee = (id: number) =>
  apiRequest<void>(`/guarantees/${id}`, {
    method: 'DELETE',
  });

export const syncGuarantees = () =>
  apiRequest<{ guarantees: Guarantee[] }>('/guarantees/sync', {
    method: 'POST',
  });

export const declareClaim = (data: DeclareClaimRequest) =>
  apiRequest<{ guaranteeId: number; claimId: number }>(
    '/guarantees/claims',
    {
      method: 'POST',
      body: JSON.stringify(data),
    }
  );

export const getGuaranteeClaims = (guaranteeId: number) =>
  apiRequest<any[]>(`/guarantees/${guaranteeId}/claims`);
