import styled from 'styled-components';

export const DaysList = styled.ul`
  background-color: ${({ theme }) => theme.bgColors.page};
  border: 1px solid ${({ theme }) => theme.borderColors.calendar};
  padding: 16px;
  border-radius: 8px;
  justify-content: space-between;
  display: flex;
  width: 100%;
  margin-bottom: 14px;
  @media (min-width: 768px) {
    padding: 14px 40px;
    margin-bottom: 18px;
  }
  @media (min-width: 1440px) {
    padding: 14px 60px;
    margin-bottom: 15px;
  }
`;

export const DaysItems = styled.li`
  color: ${({ theme }) => theme.textColors.main};
  font-weight: 600;
`;

export const WeekendDaysItems = styled(DaysItems)`
  color: ${({ theme }) => theme.notChangedcolors.accentColor};
`;
