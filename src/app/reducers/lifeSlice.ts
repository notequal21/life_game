import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ILifeState {
  age: number;
  energy: number;
  energyCapacity: number;
  burnOutRisk: number;
}

const initialState: ILifeState = {
  age: 18,
  energy: 100,
  energyCapacity: 100,
  burnOutRisk: 0,
};

export const lifeSlice = createSlice({
  name: 'life',
  initialState,
  reducers: {
    decrementEnergyByAmount: (state, action: PayloadAction<number>) => {
      if (state.energy - action.payload >= 0) {
        state.energy -= action.payload;
      } else {
        console.log('Недостаточно энергии');
      }
    },
    decrementEnergyCapacityByAmount: (state, action: PayloadAction<number>) => {
      if (state.energyCapacity - action.payload >= 0) {
        state.energyCapacity -= action.payload;
      } else {
        console.log('У вас нет энегрии');
      }
    },
    incrementBurnOutRiskByAmount: (state, action: PayloadAction<number>) => {
      state.burnOutRisk += action.payload;
    },
    decrementBurnOutRiskByAmount: (state, action: PayloadAction<number>) => {
      state.burnOutRisk -= action.payload;
    },
    resetBurnOutRisk: (state) => {
      state.burnOutRisk = 0;
    },
    resetEnergy: (state) => {
      state.energy = state.energyCapacity;
    },
  },
});

export const {
  decrementEnergyByAmount,
  resetEnergy,
  incrementBurnOutRiskByAmount,
  decrementBurnOutRiskByAmount,
  resetBurnOutRisk,
  decrementEnergyCapacityByAmount,
} = lifeSlice.actions;

export const selectEnergy = (state: RootState) => state.life.energy;
export const selectBurnOutRisk = (state: RootState) => state.life.burnOutRisk;

export default lifeSlice.reducer;
