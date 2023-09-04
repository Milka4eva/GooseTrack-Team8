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
} from './Statistics.styled';

function Statistics() {
  const dispatch = useDispatch();
  const currentDate = useSelector(state => state.calendar.currentMonth);
  const tasks = useSelector(state => state.calendar.tasks);
  const [startDate, setStartDate] = useState(new Date(currentDate));
  const [toDoMonth, setToDoMonth] = useState(0);
  const [inProgressMonth, setInProgressMonth] = useState(0);
  const [doneMonth, setDoneMonth] = useState(0);
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

    // Initialize counters for each category
    let todoCount = 0;
    let inProgressCount = 0;
    let doneCount = 0;

    // Iterate through the tasks and count them by category
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
          // Handle unexpected category values, if any
          break;
      }
    }

    // Calculate the total count of tasks
    const totalCount = tasks.length;

    // Calculate the percentage of tasks in each category
    const todoPercentage = (todoCount / totalCount) * 100;
    const inProgressPercentage = (inProgressCount / totalCount) * 100;
    const donePercentage = (doneCount / totalCount) * 100;
    setDoneMonth(donePercentage.toFixed());
    setInProgressMonth(inProgressPercentage.toFixed());
    setToDoMonth(todoPercentage.toFixed());
  };

  useEffect(() => {
    const month = startDate.getMonth();
    const year = startDate.getUTCFullYear();
    const date = {
      month,
      year,
    };
    dispatch(getTasksOfMonth(date));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, startDate]);
  useEffect(() => {
    console.log(startDate, tasks);
    percentageMonthCounting(tasks);
  }, [tasks]);
  return (
    <StatisticsWrapper>
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
                  <RowPercentageDay>
                    <PercentageValue>30%</PercentageValue>
                  </RowPercentageDay>
                  <RowPercentageMonth
                    style={{
                      height: `${percentageRowHight * (toDoMonth / 100)}px`,
                    }}
                  >
                    <PercentageValue
                      style={{
                        bottom: `${
                          percentageRowHight * (toDoMonth / 100) + 20
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
                  <RowPercentageDay>
                    <PercentageValue>30%</PercentageValue>
                  </RowPercentageDay>
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
                          percentageRowHight * (inProgressMonth / 100) + 20
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
                  <RowPercentageDay>
                    <PercentageValue>30%</PercentageValue>
                  </RowPercentageDay>
                  <RowPercentageMonth
                    style={{
                      height: `${percentageRowHight * (doneMonth / 100)}px`,
                    }}
                  >
                    <PercentageValue
                      style={{
                        bottom: `${
                          percentageRowHight * (doneMonth / 100) + 20
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
