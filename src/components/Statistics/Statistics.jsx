import React, { useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksOfMonth } from 'redux/calendar/calendar.operations';
import Icons from '../../images/icons.svg';
import 'react-datepicker/dist/react-datepicker.css';
import './custom-datepicker.css';
import {
  StatisticsWrapper,
  MonthSelectionSection,
  MonthAndLegendWrapper,
  LegendSection,
  LegendParagraph,
  PrevDayBtn,
  NextDayBtn,
  PinkMarker,
  BlueMarker,
  NextDayBtnIcon,
  PrevDayBtnIcon,
  ButtonsWrapper,
  StatsSection,
  TasksHeading,
  StatsTable,
  StatsRow,
  StatsLine,
  StatsNum,
  StatsFooter,
  StatsFooterRow,
  StatsFooterRowText,
  RowPercentageWrapper,
  RowPercentageDay,
  RowPercentageMonth,
  PercentageValue,
  PercentageHolder,
} from './Statistics.styled';

function Statistics() {
  const dispatch = useDispatch();
  const currentDate = useSelector(state => state.calendar.currentMonth);
  const tasks = useSelector(state => state.calendar.tasks);
  const [startDate, setStartDate] = useState(new Date(currentDate));
  const [toDoMonth, setToDoMonth] = useState(0);
  const [inProgressMonth, setInProgressMonth] = useState(0);
  const [doneMonth, setDoneMonth] = useState(0);
  const [toDoDay, setToDoDay] = useState(0);
  const [inProgressDay, setInProgressDay] = useState(0);
  const [doneDay, setDoneDay] = useState(0);
  const percentageRowHight = 246;
  const fullCurrentDate = new Date(currentDate);
  const decreaseDayByOne = () => {
    const prevDay = new Date(startDate.setDate(startDate.getDate() - 1));
    if (fullCurrentDate <= prevDay) {
      setStartDate(prevDay);
    }
  };
  const increaseDayByOne = () => {
    const nextDay = new Date(startDate.setDate(startDate.getDate() + 1));
    setStartDate(nextDay);
  };
  const percentageMonthCounting = tasks => {
    if (!Array.isArray(tasks) || tasks.length === 0) {
      setDoneMonth(0);
      setInProgressMonth(0);
      setToDoMonth(0);
      return;
    }

    let todoCount = 0;
    let inProgressCount = 0;
    let doneCount = 0;

    for (const task of tasks) {
      switch (task.category) {
        case 'to-do':
          todoCount++;
          break;
        case 'in-progress':
          inProgressCount++;
          break;
        case 'done':
          doneCount++;
          break;
        default:
          break;
      }
    }

    const totalCount = tasks.length;

    const todoPercentage = (todoCount / totalCount) * 100;
    const inProgressPercentage = (inProgressCount / totalCount) * 100;
    const donePercentage = (doneCount / totalCount) * 100;
    setDoneMonth(donePercentage.toFixed());
    setInProgressMonth(inProgressPercentage.toFixed());
    setToDoMonth(todoPercentage.toFixed());
  };
  const percentageDayCounting = tasks => {
    if (!Array.isArray(tasks) || tasks.length === 0) {
      setDoneDay(0);
      setInProgressDay(0);
      setToDoDay(0);
      return;
    }

    const year = startDate.getFullYear();
    const month = String(startDate.getMonth() + 1).padStart(2, '0');
    const day = String(startDate.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;
    const currentDayTasks = tasks.filter(el => el.date === dateString);

    let todoCount = 0;
    let inProgressCount = 0;
    let doneCount = 0;

    if (!Array.isArray(currentDayTasks) || currentDayTasks.length === 0) {
      setDoneDay(0);
      setInProgressDay(0);
      setToDoDay(0);
      return;
    }

    for (const task of currentDayTasks) {
      switch (task.category) {
        case 'to-do':
          todoCount++;
          break;
        case 'in-progress':
          inProgressCount++;
          break;
        case 'done':
          doneCount++;
          break;
        default:
          break;
      }
    }

    const totalCount = currentDayTasks.length;
    const todoPercentage = (todoCount / totalCount) * 100;
    const inProgressPercentage = (inProgressCount / totalCount) * 100;
    const donePercentage = (doneCount / totalCount) * 100;
    setDoneDay(donePercentage.toFixed());
    setInProgressDay(inProgressPercentage.toFixed());
    setToDoDay(todoPercentage.toFixed());
  };

  useEffect(() => {
    const month = startDate.getMonth();
    const year = startDate.getUTCFullYear();
    const date = {
      month,
      year,
    };
    dispatch(getTasksOfMonth(date));
  }, [dispatch, startDate]);
  useEffect(() => {
    percentageMonthCounting(tasks);
  }, [tasks]);
  useEffect(() => {
    percentageDayCounting(tasks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks]);
  return (
    <StatisticsWrapper>
      <MonthAndLegendWrapper>
        <MonthSelectionSection>
          <ReactDatePicker
            calendarStartDay={1}
            dateFormat="d MMMM  yyyy "
            minDate={new Date()}
            selected={startDate}
            className="custom-datepicker"
            onChange={date => setStartDate(date)}
            chooseDayAriaLabelPrefix="1"
          />
          <ButtonsWrapper>
            {startDate <= fullCurrentDate ? (
              <PrevDayBtn onClick={decreaseDayByOne} disabled={true}>
                <PrevDayBtnIcon
                  disabled={true}
                  style={{
                    stroke: '#dce3e5',
                  }}
                >
                  <use href={Icons + '#next-calendar-btn'} />
                </PrevDayBtnIcon>
              </PrevDayBtn>
            ) : (
              <PrevDayBtn onClick={decreaseDayByOne}>
                <PrevDayBtnIcon>
                  <use href={Icons + '#next-calendar-btn'} />
                </PrevDayBtnIcon>
              </PrevDayBtn>
            )}

            <NextDayBtn onClick={increaseDayByOne}>
              <NextDayBtnIcon>
                <use href={Icons + '#next-calendar-btn'} />
              </NextDayBtnIcon>
            </NextDayBtn>
          </ButtonsWrapper>
        </MonthSelectionSection>
        <LegendSection>
          <LegendParagraph>
            <PinkMarker />
            By Day
          </LegendParagraph>
          <LegendParagraph>
            <BlueMarker />
            By Month
          </LegendParagraph>
        </LegendSection>
      </MonthAndLegendWrapper>
      <StatsSection>
        <TasksHeading>Tasks</TasksHeading>
        <StatsTable>
          <StatsRow>
            <StatsNum>100</StatsNum>
            <StatsLine />
          </StatsRow>
          <StatsRow>
            <StatsNum>80</StatsNum>
            <StatsLine />
          </StatsRow>
          <StatsRow>
            <StatsNum>60</StatsNum>
            <StatsLine />
          </StatsRow>
          <StatsRow>
            <StatsNum>40</StatsNum>
            <StatsLine />
          </StatsRow>
          <StatsRow>
            <StatsNum>20</StatsNum>
            <StatsLine />
          </StatsRow>
          <StatsRow>
            <StatsNum>0</StatsNum>
            <StatsLine />
          </StatsRow>
          <StatsFooter>
            <StatsFooterRow>
              <StatsFooterRowText>
                <RowPercentageWrapper>
                  <RowPercentageDay
                    style={{
                      height: `${percentageRowHight * (toDoDay / 100)}px`,
                    }}
                  >
                    <PercentageValue
                      style={{
                        bottom: `${
                          percentageRowHight * (toDoDay / 100) + 40
                        }px`,
                      }}
                    >
                      {toDoDay}%
                    </PercentageValue>
                  </RowPercentageDay>
                  <PercentageHolder />
                  <RowPercentageMonth
                    style={{
                      height: `${percentageRowHight * (toDoMonth / 100)}px`,
                    }}
                  >
                    <PercentageValue
                      style={{
                        bottom: `${
                          percentageRowHight * (toDoMonth / 100) + 40
                        }px`,
                      }}
                    >
                      {toDoMonth}%
                    </PercentageValue>
                  </RowPercentageMonth>
                </RowPercentageWrapper>
                To Do
              </StatsFooterRowText>
            </StatsFooterRow>
            <StatsFooterRow>
              <StatsFooterRowText>
                <RowPercentageWrapper>
                  <RowPercentageDay
                    style={{
                      height: `${percentageRowHight * (inProgressDay / 100)}px`,
                    }}
                  >
                    <PercentageValue
                      style={{
                        bottom: `${
                          percentageRowHight * (inProgressDay / 100) + 40
                        }px`,
                      }}
                    >
                      {inProgressDay}%
                    </PercentageValue>
                  </RowPercentageDay>
                  <PercentageHolder />
                  <RowPercentageMonth
                    style={{
                      height: `${
                        percentageRowHight * (inProgressMonth / 100)
                      }px`,
                    }}
                  >
                    <PercentageValue
                      style={{
                        bottom: `${
                          percentageRowHight * (inProgressMonth / 100) + 40
                        }px`,
                      }}
                    >
                      {inProgressMonth}%
                    </PercentageValue>
                  </RowPercentageMonth>
                </RowPercentageWrapper>
                In Progress
              </StatsFooterRowText>
            </StatsFooterRow>
            <StatsFooterRow>
              <StatsFooterRowText>
                <RowPercentageWrapper>
                  <RowPercentageDay
                    style={{
                      height: `${percentageRowHight * (doneDay / 100)}px`,
                    }}
                  >
                    <PercentageValue
                      style={{
                        bottom: `${
                          percentageRowHight * (doneDay / 100) + 40
                        }px`,
                      }}
                    >
                      {doneDay}%
                    </PercentageValue>
                  </RowPercentageDay>
                  <PercentageHolder />
                  <RowPercentageMonth
                    style={{
                      height: `${percentageRowHight * (doneMonth / 100)}px`,
                    }}
                  >
                    <PercentageValue
                      style={{
                        bottom: `${
                          percentageRowHight * (doneMonth / 100) + 40
                        }px`,
                      }}
                    >
                      {doneMonth}%
                    </PercentageValue>
                  </RowPercentageMonth>
                </RowPercentageWrapper>
                Done
              </StatsFooterRowText>
            </StatsFooterRow>
          </StatsFooter>
        </StatsTable>
      </StatsSection>
    </StatisticsWrapper>
  );
}

export default Statistics;
