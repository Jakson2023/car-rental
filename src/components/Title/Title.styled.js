import styled from "styled-components";

import imageCar from '../../common/images/car.png'
export const WrapperTitle = styled.div`



`
export const WrapperImage = styled.div`
background-image: url(${imageCar});
height: 530px;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: 20%;
    width: 80%;
    top: 35%;
`
export const TitleText = styled.h1`
text-shadow: 4px 4px 8px rgba(240, 128, 128, 0.8);
  color: #4B0082; 
  font-size: 95px;
  font-weight: 800;
  line-height: 1.11;

`