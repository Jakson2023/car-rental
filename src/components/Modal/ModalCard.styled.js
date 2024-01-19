import styled from 'styled-components';
import close from '../../common/images/x.svg';

export const Wrapper = styled.div`
  width: 460px;
  height: 100%;
  border: 2px solid cyan;
  border-radius: 24px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  padding: 0 40px 40px;
`;

export const NameAuto = styled.h1`
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;
export const BlockInfo = styled.ul`
  height: 18px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4px;
  margin-top: 8px;
`;

export const BlockInfo2 = styled.ul`
  height: 18px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 14px;
`;

export const Description = styled.p`
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 24px;
`;
export const DescriptionA = styled.p`
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 8px;
`;

export const BlockAccessoriesTop = styled.ul`
  height: 18px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4px;
  overflow: hidden;
`;

export const BlockAccessoriesBottom = styled.ul`
  height: 18px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
  overflow: hidden;
`;

export const ButtonClose = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  background-image: url(${close});
  margin-top: 16px;
  margin-left: 100%;
`;
export const ImgContainerModal = styled.div`
  width: 100%;
  height: 248px;
  border-radius: 14px;
  background: #f3f3f2;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 14px;
`;
export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const RentalBlockTitle = styled.p`
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 8px;
`;

export const RentalBlockTop = styled.ul`
  color: #363535;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  height: 32px;
  gap: 36px;
  padding: 7px 14px;
  align-items: center;
`;
export const RentalBlockBottom = styled.ul`
  color: #363535;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  height: 32px;
  margin-bottom: 24px;
  gap: 36px;
  padding: 7px 14px;
  align-items: center;
`;
export const ButtonRental = styled.button`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  width: 168px;
  height: 44px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
`;
export const ColorAge = styled.span`
  color: #3470ff;
`;
