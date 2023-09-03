import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { Container } from './CalendarPage.styled';
import { Outlet } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentMonth } from 'redux/calendar/calendar.selectors';
import { getTasksOfMonth } from 'redux/calendar/calendar.operations';
import { format } from 'date-fns';
import { Route, Routes, Navigate } from 'react-router-dom';
import { MonthCalendarHead } from './MonthCalendarHead';
import { CalendarTable } from './CalendarTable';

export default function CalendarPage() {
  const dispatch = useDispatch();
  const currentDate = useSelector(selectCurrentMonth);

  useEffect(() => {
    if (currentDate) {
      dispatch(
        getTasksOfMonth({
          month: format(new Date(currentDate), 'M'),
          year: format(new Date(currentDate), 'yyyy'),
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDate]);

  return (
    <Container>
      <CalendarToolbar />
      <Outlet />

      <Routes>
        <Route index element={<Navigate to={`month/${currentDate}`} />} />
        <Route
          path="month/:currentDate"
          element={
            <>
              <MonthCalendarHead />
              <CalendarTable />
            </>
          }
        />

        <Route path="day/:currentDate" element={<div>Day </div>} />
      </Routes>
    </Container>
  );
}
