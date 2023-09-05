import { useNavigate, useParams } from 'react-router-dom';
import { CalendarTable } from './CalendarTable';
import { CalendarToolbar } from './CalendarToolbar/CalendarToolbar';
import { MonthCalendarHead } from './MonthCalendarHead';
import { PERIOD_TYPE_DAY, PERIOD_TYPE_MONTH } from './constants';

export default function CalendarMonth() {
  const { currentDate } = useParams();
  const navigate = useNavigate();
  const setCurrentDate = isoDate => {
    navigate(`/calendar/month/${isoDate}`);
  };
  const switchToDayPeriodType = type => {
    if (type === PERIOD_TYPE_DAY) {
      navigate(`/calendar/day/${currentDate}`);
    }
  };
  return (
    <>
      <CalendarToolbar
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        periodType={PERIOD_TYPE_MONTH}
        setPeriodType={switchToDayPeriodType}
      />
      <MonthCalendarHead />
      <CalendarTable />
    </>
  );
}
