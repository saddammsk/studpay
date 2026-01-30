/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type {
  GuaranteeState,
  Guarantee,
  CreateGuaranteeRequest,
  DeclareClaimRequest,
} from '@/types/guarantees';

import {
  getGuarantees,
  createGuarantee as createGuaranteeApi,
  syncGuarantees as syncGuaranteesApi,
  declareClaim as declareClaimApi,
} from '@/services/guaranteeAPI';


const initialState: GuaranteeState = {
  guarantees: [],
  stats: {
    active: 0,
    pending: 0,
    expired: 0,
  },
  loading: false,
  syncing: false,
  error: null,
  lastSync: null,
};


const calculateStats = (guarantees: Guarantee[]) => ({
  active: guarantees.filter(g => g.status === 'Active').length,
  pending: guarantees.filter(g => g.status === 'Pending').length,
  expired: guarantees.filter(g => g.status === 'Expired').length,
});


export const fetchGuarantees = createAsyncThunk<
  { guarantees: Guarantee[] },
  void,
  { rejectValue: string }
>('guarantees/fetch', async (_, { rejectWithValue }) => {
  try {
    return await getGuarantees();
  } catch (e: any) {
    return rejectWithValue(e.message || 'Failed to fetch guarantees');
  }
});

export const createGuarantee = createAsyncThunk<
  Guarantee,
  CreateGuaranteeRequest,
  { rejectValue: string }
>('guarantees/create', async (data, { rejectWithValue }) => {
  try {
    return await createGuaranteeApi(data);
  } catch (e: any) {
    return rejectWithValue(e.message || 'Failed to create guarantee');
  }
});

export const syncGuarantees = createAsyncThunk<
  { guarantees: Guarantee[] },
  void,
  { rejectValue: string }
>('guarantees/sync', async (_, { rejectWithValue }) => {
  try {
    return await syncGuaranteesApi();
  } catch (e: any) {
    return rejectWithValue(e.message || 'Failed to sync guarantees');
  }
});

export const declareClaim = createAsyncThunk<
  { guaranteeId: number; claimId: number },
  DeclareClaimRequest,
  { rejectValue: string }
>('guarantees/declareClaim', async (data, { rejectWithValue }) => {
  try {
    return await declareClaimApi(data);
  } catch (e: any) {
    return rejectWithValue(e.message || 'Failed to declare claim');
  }
});


const guaranteeSlice = createSlice({
  name: 'guarantees',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    updateGuaranteeStatus(
      state,
      action: PayloadAction<{
        id: number;
        status: 'Active' | 'Pending' | 'Expired';
      }>
    ) {
      const g = state.guarantees.find(x => x.id === action.payload.id);
      if (!g) return;

      g.status = action.payload.status;
      g.disabled = action.payload.status === 'Expired';
      state.stats = calculateStats(state.guarantees);
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchGuarantees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGuarantees.fulfilled, (state, action) => {
        state.loading = false;
        state.guarantees = action.payload.guarantees;
        state.stats = calculateStats(action.payload.guarantees);
        state.lastSync = new Date().toISOString();
      })
      .addCase(fetchGuarantees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? null;
      })

      .addCase(createGuarantee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createGuarantee.fulfilled, (state, action) => {
        state.loading = false;
        state.guarantees.push(action.payload);
        state.stats = calculateStats(state.guarantees);
      })
      .addCase(createGuarantee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? null;
      })

      .addCase(syncGuarantees.pending, (state) => {
        state.syncing = true;
        state.error = null;
      })
      .addCase(syncGuarantees.fulfilled, (state, action) => {
        state.syncing = false;
        state.guarantees = action.payload.guarantees;
        state.stats = calculateStats(action.payload.guarantees);
        state.lastSync = new Date().toISOString();
      })
      .addCase(syncGuarantees.rejected, (state, action) => {
        state.syncing = false;
        state.error = action.payload ?? null;
      })

      .addCase(declareClaim.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(declareClaim.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(declareClaim.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? null;
      });
  },
});

export const {
  clearError,
  updateGuaranteeStatus,
} = guaranteeSlice.actions;

export default guaranteeSlice.reducer;
