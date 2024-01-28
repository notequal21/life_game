import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectBurnOutRisk, selectEnergy } from '../../app/reducers/lifeSlice';
import { setNextDay } from '../../app/reducers/thunks';
import { selectCurrentDay } from '../../app/reducers/timelineSlice';
import style from './Header.module.scss';

const Header = () => {
  const dispatch = useAppDispatch();
  const currentDay = useAppSelector(selectCurrentDay);
  const energy = useAppSelector(selectEnergy);
  const burnOutRist = useAppSelector(selectBurnOutRisk);

  return (
    <header className={style.header}>
      <div>
        day: {currentDay}
        <button onClick={() => dispatch(setNextDay())}>next day</button>
      </div>
      <div>energy: {energy}</div>
      <div>BurnOut Risk : {burnOutRist}</div>
    </header>
  );
};

export default Header;
