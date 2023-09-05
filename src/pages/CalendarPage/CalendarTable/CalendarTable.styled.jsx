import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: stretch;
  gap: 1px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 52px;
  background-color: ${({ theme }) => theme.borderColors.calendar};
  border: 1px solid ${({ theme }) => theme.borderColors.calendar};
  @media (min-width: 768px) {
    margin-bottom: 42px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const GridItem = styled(NavLink)`
  background-color: ${({ theme }) => theme.bgColors.page};
  text-align: right;
  padding-top: 8px;
  padding-right: 4px;
  height: 94px;
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  &.active {
  }
  @media (min-width: 768px) {
    padding-top: 14px;
    padding-right: 14px;
    height: 144px;
  }
  @media (min-width: 1440px) {
    height: 125px;
  }
`;

export const CalendarDate = styled.p`
  width: 20px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  color: ${({ $current, theme }) =>
    $current ? theme.textColors.main : theme.textColors.main};
  background-color: ${({ $current, theme }) =>
    $current ? theme.notChangedcolors.accentColor : 'none'};
  @media (min-width: 768px) {
    font-size: 16px;
    width: 27px;
    height: 26px;
  }
`;
