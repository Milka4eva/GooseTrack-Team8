import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  padding: 28px 14px;
`;
export const MonthSelectionSection = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
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
`;
export const ButtonsWrapper = styled.div``;
export const NextDayBtn = styled.button`
  background-color: #ffffff;
  border: 1px solid #dce3e580;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 30px;
  width: 36px;
  position: relative;
`;
export const PrevDayBtn = styled.button`
  background-color: #ffffff;
  border: 1px solid #dce3e580;
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
  stroke: #343434;
  top: 7px;
  left: 10px;
`;
export const PrevDayBtnIcon = styled.svg`
  position: absolute;
  padding: 0;
  height: 16px;
  width: 16px;
  stroke: #343434;
  rotate: -180deg;
  top: 7px;
  left: 10px;
`;
export const PinkMarker = styled.span`
  height: 8px;
  width: 8px;
  background-color: #ffd2dd;
  border-radius: 50%;
  margin-right: 10px;
  display: inline-block;
`;
export const BlueMarker = styled.span`
  height: 8px;
  width: 8px;
  background-color: #3e85f3;
  border-radius: 50%;
  margin-right: 8px;
  display: inline-block;
`;

export const StatsSection = styled.div`
  position: relative;
  margin-top: 20px;
  border-radius: 20px;
  border: 0.8px solid #e3f3ff;
  padding: 36px 14px 60px;
`;
export const TasksHeading = styled.h3`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
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
`;
export const StatsLine = styled.div`
  width: 100%;
  top: 3px;
  height: 1px;
  border: 1px solid #e3f3ff;
  color: #e3f3ff;
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
`;
export const StatsFooterRow = styled.div``;
export const StatsFooterRowText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
`;
export const RowPercentageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 20px;
  gap: 4px;
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
`;
export const PercentageValue = styled.div`
  position: absolute;
  margin-left: 2px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
`;

// aima25@mail.com
// Aimaaima25.
