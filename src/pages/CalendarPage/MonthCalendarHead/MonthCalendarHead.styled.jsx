import styled from 'styled-components';

export const DaysList = styled.ul`
  background-color: ${({ theme }) => theme.bgColors.page};
  display: flex;
  width: 100%;
`;

export const DaysItems = styled.li``;

export const WeekendDaysItems = styled(DaysItems)``;
