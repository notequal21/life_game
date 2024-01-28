import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { useAppDispatch } from './app/hooks';
import { decrementEnergyByAmount } from './app/reducers/lifeSlice';

function App() {
  const dispatch = useAppDispatch();

  return (
    <div className='wrapper'>
      <div className='content'>
        <Header />

        <button onClick={() => dispatch(decrementEnergyByAmount(25))}>
          do something
        </button>

        <Suspense fallback={<div className=''></div>}>
          <Routes>{/* <Route path='*' element={<HomePage />} /> */}</Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
