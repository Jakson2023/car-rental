import styled from 'styled-components';
import arrow from '../../common/images/chevron-down.svg';

export const WrapForm = styled.div`
  display: flex;
  margin-top: 150px;
  justify-content: center;
  gap: 18px;
  align-items: flex-end;
`;
export const WrapSelect = styled.ul`
  display: flex;
  height: 74px;
  gap: 18px;
`;

export const SelBrand = styled.select`
  color: #121417;
  border: transparent;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  cursor: pointer;
  padding: 14px 89px 14px 18px;
  height: 48px;
  width: 224px;
  appearance: none;
`;

export const SelectPrice = styled.select`
  width: 126px;
  height: 48px;
  padding: 14px 18px;
  appearance: none;
  cursor: pointer;
  color: #121417;
  border: transparent;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const SelectWrap = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    display: block;
    right: 18px;
    background-image: url(${arrow});
    top: 14px;
    width: 20px;
    height: 20px;
  }
`;

export const TextInput = styled.p`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  margin-bottom: 8px;
`;
export const InputLeft = styled.input`
  width: 43px;
  height: 20px;
  padding: 14px 85px 14px 24px;
  border: transparent;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;
export const InputRight = styled.input`
  width: 20px;
  height: 20px;
  padding: 14px 115px 14px 24px;
  border-radius: 0px 14px 14px 0px;
  border: transparent;
  background: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const ButtonSearch = styled.button`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  width: 136px;
  height: 48px;
  padding: 14px 44px;
  border-radius: 12px;
  background: #3470ff;
  cursor: pointer;
`;

export const BlockCars = styled.div`
  width: 1184px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  gap: 29px;
  row-gap: 50px;
  margin-top: 50px;
`;
export const CarCard = styled.div`
  width: 274px;
  height: 426px;
  position: relative;
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
    ),
    url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export const Img = styled.img`
height: 100%;
    width: 100%;
    object-fit: cover;

`

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

export const ModelText = styled.span`
  color: #3470ff;
`;

export const RentalPriceText = styled.li`
  margin-left: auto;
`;
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

export const SeparatorLine = styled.li`
border-right: 1px solid rgba(18, 20, 23, 0.10);
    margin-right: 6px;
    padding-right: 6px;

`

export const ButtonLoadMOre = styled.button`
color: #3470FF;
font-size: 16px;
font-weight: 500;
line-height: 1.5; 
text-decoration-line: underline;
margin: 0 auto;
margin-top: 100px;
display: block;
cursor: pointer;

`