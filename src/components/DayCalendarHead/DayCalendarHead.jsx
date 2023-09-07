import { useDispatch,} from 'react-redux';
import { useNavigate, useParams,  } from 'react-router-dom';
import {  eachDayOfInterval, endOfISOWeek, format,  formatISO,  startOfISOWeek } from 'date-fns';
import {  addChoosedDay, addIndexCurrentDay } from '../../redux/calendar/calendar.slice';

import { Btn, Day, Item, List } from './DayCalendarHead.styled';



export const DayCalendarHead = () => {
   const day = useParams();
  const { currentDay } = day;

 
  const dispatch = useDispatch();
   const navigate = useNavigate();

  function formattedDay(day) {
    return day.startsWith('0') ? day.slice(1) : day;
  }
  
  // const dates = [];
  // for (let i = 0; i < 7; i++) {
  //   dates.push(add(day, { days: i }));
  // }

  const handleClick = day => {
   dispatch(addIndexCurrentDay(Number(format(day, 'd')) - 1));
                    dispatch(
                      addChoosedDay(
                        formatISO(new Date(day), {
                          representation: 'date',
                        })
                      )
    );
    navigate(`/calendar/day/${format(day, 'yyyy-MM-dd')}`);
  };
  let daysInWeek;

  if (currentDay) {
    daysInWeek = eachDayOfInterval({
      start: startOfISOWeek(new Date(currentDay), { weekStartsOn: 1 }),
      end: endOfISOWeek(new Date(currentDay), { weekStartsOn: 1 }),
    });
  } else {
    daysInWeek = eachDayOfInterval({
      start: startOfISOWeek(new Date(), { weekStartsOn: 1 }),
      end: endOfISOWeek(new Date(), { weekStartsOn: 1 }),
    });
  }

  return (
    <>
      <List>
        {daysInWeek?.map((day, idx) => 
              <Item key={idx}>
              <Day>{format(day, 'EEE').toUpperCase()}</Day>
                   {/* <Day>{format(day, 'EEE').slice(0, 1)}</Day> */}
                   <Btn type="button" onClick={() => handleClick(day)}>
            {formattedDay(format(day, 'dd'))}
          </Btn>
             </Item>            
       )}
      </List>
    </>
  );
};
