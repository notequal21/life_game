import { createSlice } from '@reduxjs/toolkit';

export interface IBankState {
  cash: {
    rub: number;
    usd: number;
  };
  bankBalance: {
    rub: number;
    usd: number;
  };
}

const initialState: IBankState = {
  cash: {
    rub: 500,
    usd: 0,
  },
  bankBalance: {
    rub: 0,
    usd: 0,
  },
};

export const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {},
});

export const {} = bankSlice.actions;

// export const selectEnergy = (state: RootState) => state.bank.energy;

export default bankSlice.reducer;
