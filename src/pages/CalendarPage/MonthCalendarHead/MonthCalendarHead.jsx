import {
  DaysList,
  DaysItems,
  WeekendDaysItems,
} from './MonthCalendarHead.styled';

const workDayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
const weekendDayNames = ['SAT', 'SUN'];

export default function MonthCalendarHead() {
  return (
    <DaysList>
      {workDayNames.map(item => (
        <DaysItems key={item}>{item}</DaysItems>
      ))}
      {weekendDayNames.map(item => (
        <WeekendDaysItems key={item}>{item}</WeekendDaysItems>
      ))}
    </DaysList>
  );
}
