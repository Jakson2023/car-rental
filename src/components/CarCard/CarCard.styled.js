import styled from 'styled-components';
export const BlockInfoTop = styled.ul`
  width: 274px;
  height: 40px;
  display: flex;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 28px;
  overflow: hidden;
  white-space: nowrap;
  flex-wrap: wrap;
`;

export const BlockName = styled.ul`
  width: 274px;
  height: 24px;
  color: #121417;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  display: flex;
`;
export const ButtonFavorite = styled.button`
  height: 18px;
  width: 18px;
  background-color: transparent;
  position: absolute;
  right: 14px;
  top: 14px;
  z-index: 2;
  cursor: pointer;
`;
export const ButtonLearnMore = styled.button`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  border-radius: 12px;
  background: #3470ff;
  cursor: pointer;
`;
export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const ImgContainer = styled.div`
  width: 100%;
  height: 268px;
  border: 2px solid lightblue;
  border-radius: 14px;
  margin-bottom: 14px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ), lightgray 50% / cover no-repeat;
`;
export const ModelText = styled.span`
  /* color: #3470ff; */
`;
export const RentalPriceText = styled.li`
  margin-left: auto;
`;
export const SeparatorLine = styled.li`
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  margin-right: 6px;
  padding-right: 6px;
`;
export const CarCard = styled.div`
  width: 274px;
  height: 426px;
  position: relative;
`;
