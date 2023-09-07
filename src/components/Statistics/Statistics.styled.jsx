import styled from 'styled-components';
export const StatisticPage = styled.div`
  height: calc(100vh - 120px);
  @media (min-width: 768px) {
    height: calc(100vh - 132px);
  }
  @media (min-width: 1440px) {
    height: calc(100vh - 118px);
  }
`;
export const StatisticsWrapper = styled.div`
  padding: 28px 14px;
  background-color: ${({ theme }) => theme.userProfile.bgColor};
  border-radius: 16px;
  @media (min-width: 768px) {
    padding: 100px 50px;
  }
  @media (min-width: 1440px) {
    padding: 120px 140px;
  }
`;
export const MonthSelectionSection = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
`;
export const MonthAndLegendWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const LegendSection = styled.div`
  display: flex;
`;
export const LegendParagraph = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin-right: 8px;
  color: ${({ theme }) => theme.textColors.main};
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;
export const ButtonsWrapper = styled.div`
  @media (min-width: 768px) {
    margin-left: 8px;
  }
`;
export const NextDayBtn = styled.button`
  background-color: ${({ theme }) => theme.userProfile.bgColor};
  border: 1px solid ${({ theme }) => theme.borderColors.calendar};
  cursor: pointer;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 30px;
  width: 36px;
  position: relative;
`;
export const PrevDayBtn = styled.button`
  background-color: ${({ theme }) => theme.userProfile.bgColor};
  border: 1px solid ${({ theme }) => theme.borderColors.calendar};
  cursor: pointer;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  height: 30px;
  width: 36px;
  position: relative;
`;
export const NextDayBtnIcon = styled.svg`
  position: absolute;
  padding: 0;
  height: 16px;
  width: 16px;
  stroke: ${({ theme }) => theme.textColors.textSecondary};
  top: 7px;
  left: 10px;
`;
export const PrevDayBtnIcon = styled.svg`
  position: absolute;
  padding: 0;
  height: 16px;
  width: 16px;
  stroke: ${({ theme }) => theme.textColors.textSecondary};
  rotate: -180deg;
  top: 7px;
  left: 10px;
`;
export const PinkMarker = styled.span`
  height: 8px;
  width: 8px;
  background-color: var(--linear-pink-color);
  border-radius: 50%;
  margin-right: 10px;
  display: inline-block;
`;
export const BlueMarker = styled.span`
  height: 8px;
  width: 8px;
  background-color: var(--main-blue-color);
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
`;

export const StatsSection = styled.div`
  position: relative;
  margin-top: 20px;
  border-radius: 20px;
  border: 0.8px solid ${({ theme }) => theme.borderColors.statisticBorder};
  padding: 36px 14px 60px;
`;
export const TasksHeading = styled.h3`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.textColors.main};
`;
export const StatsTable = styled.div``;
export const StatsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 28px;
`;
export const StatsNum = styled.p`
  width: 24px;
  margin-right: 14px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: right;
  display: block;
  color: ${({ theme }) => theme.textColors.main};
`;
export const StatsLine = styled.div`
  width: 100%;
  top: 3px;
  height: 1px;
  border: 1px solid ${({ theme }) => theme.borderColors.statisticBorder};
  color: ${({ theme }) => theme.borderColors.statisticBorder};
`;
export const StatsFooter = styled.div`
  margin-top: 5px;
  padding-left: 24px;
  display: flex;
  gap: 24px;
  justify-content: space-between;
  position: absolute;
  bottom: 34px;
  left: 45px;
  @media (min-width: 768px) {
    padding-left: 80px;
    padding-right: 80px;
    gap: 112px;
  }
  @media (min-width: 1440px) {
    padding-left: 160px;
    padding-right: 160px;
    gap: 136px;
  }
`;
export const StatsFooterRow = styled.div``;
export const StatsFooterRowText = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${({ theme }) => theme.textColors.main};
`;
export const RowPercentageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 20px;
  left: 0px;
  bottom: 31px;
`;
export const RowPercentageDay = styled.div`
  height: 246px;
  width: 22px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-image: linear-gradient(
    0deg,
    rgba(255, 210, 221, 1),
    rgba(255, 210, 221, 0)
  );
  @media (min-width: 768px) {
    width: 27px;
  }
`;
export const RowPercentageMonth = styled.div`
  width: 22px;
  height: 246px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-image: linear-gradient(
    0deg,
    rgba(62, 133, 243, 1),
    rgba(62, 133, 243, 0)
  );
  @media (min-width: 768px) {
    width: 27px;
  }
  @media (min-width: 1440px) {
  }
`;
export const PercentageValue = styled.div`
  position: absolute;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  bottom: 286px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const PercentageHolder = styled.div`
  height: 246px;
  width: 4px;
  @media (min-width: 768px) {
    width: 8px;
  }
  @media (min-width: 1440px) {
    width: 10px;
  }
`;
// aima25@mail.com
// Aimaaima25.
