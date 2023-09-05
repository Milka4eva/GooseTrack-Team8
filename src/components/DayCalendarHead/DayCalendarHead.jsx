import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add, format, parse } from 'date-fns';
import { calendarSlice } from '../../redux/calendar/calendar.slice';
import { selectIndexCurrentDay } from '../../redux/calendar/calendar.selectors';
import { Btn, Day, Item, List } from './DayCalendarHead.styled';

export const DayCalendarHead = () => {
  const normalizedDate = useSelector(selectIndexCurrentDay);

  const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const dates = [];
  for (let i = 0; i < 7; i++) {
    dates.push(add(date, { days: i }));
  }

  const handleClick = date => {
    dispatch(calendarSlice(format(date, 'yyyy-MM-dd')));
    navigate(`/calendar/day/${format(date, 'yyyy-MM-dd')}`);
  };

  function formattedDay(day) {
    return day.startsWith('0') ? day.slice(1) : day;
  }

  return (
    <List>
      {dates.map(date => (
        <Item key={date} item={format(date, 'eee').toUpperCase()}>
          <Day>{format(date, 'eee').toUpperCase()}</Day>
          <Day>{format(date, 'eee').slice(0, 1)}</Day>
          <Btn type="button" onClick={() => handleClick(date)}>
            {formattedDay(format(date, 'dd'))}
          </Btn>
        </Item>
      ))}
    </List>
  );
};
