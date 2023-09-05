import { Container } from './CalendarPage.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTasksOfMonth } from 'redux/calendar/calendar.operations';
import { format, formatISO } from 'date-fns';
import { Route, Routes, Navigate } from 'react-router-dom';
import CalendarMonthView from './CalendarMonthView';
import CalendarDayView from './CalendarDayView';

export default function CalendarPage() {
  const dispatch = useDispatch();
  const currentDate = formatISO(new Date(), {
    representation: 'date',
  });

  useEffect(() => {
    dispatch(
      getTasksOfMonth({
        month: format(new Date(currentDate), 'M'),
        year: format(new Date(currentDate), 'yyyy'),
      })
    );
  }, [currentDate, dispatch]);

  return (
    <Container>
      <Routes>
        <Route index element={<Navigate to={`month/${currentDate}`} />} />
        <Route path="month/:currentDate" Component={CalendarMonthView} />
        <Route path="day/:currentDate" Component={CalendarDayView} />
      </Routes>
    </Container>
  );
}
