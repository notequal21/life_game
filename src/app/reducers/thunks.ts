import { useAppSelector } from '../hooks';
import { AppDispatch, AppThunk, RootState } from '../store';
import {
  decrementBurnOutRiskByAmount,
  decrementEnergyCapacityByAmount,
  incrementBurnOutRiskByAmount,
  resetBurnOutRisk,
  resetEnergy,
  selectBurnOutRisk,
  selectEnergy,
} from './lifeSlice';
import { nextDay } from './timelineSlice';

const handleBurnOutRisk = (dispatch: any, getState: any) => {
  const energyRemain = selectEnergy(getState());
  const burnOutRisk = selectBurnOutRisk(getState());

  if (burnOutRisk >= 100) {
    dispatch(decrementEnergyCapacityByAmount(10));
  }
  if (energyRemain === 0) {
    dispatch(incrementBurnOutRiskByAmount(7));
  } else if (energyRemain < 5) {
    dispatch(incrementBurnOutRiskByAmount(4));
  } else if (energyRemain < 30) {
    dispatch(incrementBurnOutRiskByAmount(2));
  } else if (energyRemain < 50) {
    dispatch(incrementBurnOutRiskByAmount(1));
  } else {
    if (burnOutRisk - 4 <= 0) {
      dispatch(resetBurnOutRisk());
    } else {
      dispatch(decrementBurnOutRiskByAmount(4));
    }
  }
};

export const setNextDay = (): AppThunk => (dispatch, getState) => {
  handleBurnOutRisk(dispatch, getState);

  dispatch(nextDay());
  dispatch(resetEnergy());
};
