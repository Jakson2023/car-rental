import React from 'react';
import {
  BlockAccessoriesBottom,
  BlockAccessoriesTop,
  BlockInfo,
  ButtonClose,
  ButtonRental,
  Description,
  DescriptionA,
  ImgContainerModal,
  NameAuto,
  RentalBlockBottom,
  RentalBlockTitle,
  RentalBlockTop,
 
  Wrapper,
} from './ModalCard.styled';
import { Separator } from 'components/Catalog/Catalog.styled';
import line from '../../common/images/line.svg';

const ModalCard = ({ closeModal, carData }) => {
  const {
    id = '',
    img = '',
    year = 0,
    type = '',
    model = '',
    mileage = 0,
    address = '',
    engineSize = 0,
    rentalPrice = 0,
    accessories = [],
    functionalities = [],
    fuelConsumption = 0,
    rentalConditions = '',
    make = '',
    description = '',
  } = carData || {};

  const separatedText = rentalConditions.split('\n');
  const minimumAge = separatedText[0];
  const validLicense = separatedText[1];
  const depositRequired = separatedText[2];

  const truncatedAddress = address.split(' ').slice(-2).join(' ');

  return (
    <Wrapper>
      <ButtonClose onClick={closeModal}></ButtonClose>
      <div>
        <ImgContainerModal>
          <img src={img} alt="" width={460} height={248} />
        </ImgContainerModal>

        <NameAuto>
          {make} {model}, {year}
        </NameAuto>
        <BlockInfo>
          <li>{truncatedAddress}</li>
          <Separator src={line} alt="" />
          <li>id:{id}</li>
          <Separator src={line} alt="" />
          <li>Year:{year}</li>
          <Separator src={line} alt="" />
          <li>Type: {type}</li>
          <li>Fuel Consumption: {fuelConsumption}</li>
          <Separator src={line} alt="" />
          <li>Engine Size: {engineSize}</li>
        </BlockInfo>
        <Description>{description}</Description>
        <DescriptionA>Accessories and functionalities:</DescriptionA>
        <BlockAccessoriesTop>
          <li>{accessories[0]}</li>
          <Separator src={line} alt="" />
          <li>{accessories[1]}</li>
          <Separator src={line} alt="" />
          <li>{functionalities[0]}</li>
        </BlockAccessoriesTop>
        <BlockAccessoriesBottom>
          <li>{accessories[2]}</li>
          <Separator src={line} alt="" />
          <li>{functionalities[1]}</li>
          <Separator src={line} alt="" />
          <li>{functionalities[2]}</li>
        </BlockAccessoriesBottom>
        <RentalBlockTitle>Rental Conditions: </RentalBlockTitle>
        
        <RentalBlockTop>
          <li>{minimumAge}</li>
          <li>{validLicense}</li>
        </RentalBlockTop>
        <RentalBlockBottom>
          <li>{depositRequired}</li>
          <li>{mileage}</li>
          <li>{rentalPrice}</li>
        </RentalBlockBottom>
        
        <ButtonRental>Rental car</ButtonRental>
      </div>
    </Wrapper>
  );
};

export default ModalCard;
