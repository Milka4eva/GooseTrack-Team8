import useCalendar from 'hooks/useCalendar';
import { useParams } from 'react-router-dom';
import { formatISO } from 'date-fns';
import { CalendarGrid, CalendarDate, GridItem } from './CalendarTable.styled';

export default function CalendarTable() {
  const { currentDate } = useParams();
  const { daysOfMonth } = useCalendar(currentDate);
  return (
    <CalendarGrid>
      {daysOfMonth.map(({ date, dayOfMonth, isCurrentMonth }) => (
        <GridItem
          key={date}
          to={`/calendar/day/${formatISO(date, { representation: 'date' })}`}
          onClick={() =>
            console.log(formatISO(date, { representation: 'date' }))
          }
        >
          {isCurrentMonth && (
            <CalendarDate
              $current={
                formatISO(date, {
                  representation: 'date',
                }) === currentDate
              }
            >
              {dayOfMonth}
            </CalendarDate>
          )}
        </GridItem>
      ))}
    </CalendarGrid>
  );
}
