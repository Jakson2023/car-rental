import React from 'react';
import {
  BlockAccessoriesBottom,
  BlockAccessoriesTop,
  BlockInfo,
  BlockInfo2,
  ButtonClose,
  ButtonRental,
  ColorAge,
  Description,
  DescriptionA,
  Img,
  ImgContainerModal,
  NameAuto,
  RentalBlockBottom,
  RentalBlockTitle,
  RentalBlockTop,
  Wrapper,
} from './ModalCard.styled';
import { SeparatorLine } from 'components/Catalog/Catalog.styled';

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

  const firstPartAge = minimumAge.split(' ').slice(0, 2).join(' ');
  const secPartAge = minimumAge.split(' ').slice(2).join(' ');
  const words = address.split(',');
  const city = words[words.length - 2];
  const country = words[words.length - 1];

  return (
    <Wrapper>
      <ButtonClose onClick={closeModal}></ButtonClose>

      <ImgContainerModal>
        <Img src={img} alt="" width={460} height={248} />
      </ImgContainerModal>

      <NameAuto>
        {make} {model}, {year}
      </NameAuto>

      <BlockInfo>
        <SeparatorLine>{city}</SeparatorLine>
        <SeparatorLine>{country}</SeparatorLine>
        <SeparatorLine>id:{id}</SeparatorLine>
        <SeparatorLine>Year:{year}</SeparatorLine>
        <li>Type: {type}</li>
      </BlockInfo>

      <BlockInfo2>
        <SeparatorLine>Fuel Consumption: {fuelConsumption}</SeparatorLine>
        <li>Engine Size: {engineSize}</li>
      </BlockInfo2>

      <Description>{description}</Description>
      <DescriptionA>Accessories and functionalities:</DescriptionA>

      <BlockAccessoriesTop>
        <SeparatorLine>{accessories[0]}</SeparatorLine>
        <SeparatorLine>{accessories[1]}</SeparatorLine>
        <li>{functionalities[0]}</li>
      </BlockAccessoriesTop>

      <BlockAccessoriesBottom>
        <SeparatorLine>{accessories[2]}</SeparatorLine>
        <SeparatorLine>{functionalities[1]}</SeparatorLine>
        <li>{functionalities[2]}</li>
      </BlockAccessoriesBottom>

      <RentalBlockTitle>Rental Conditions: </RentalBlockTitle>
      <RentalBlockTop>
        <li>
          {firstPartAge} <ColorAge>{secPartAge}</ColorAge>
        </li>
        <li>{validLicense}</li>
      </RentalBlockTop>

      <RentalBlockBottom>
        <li>{depositRequired}</li>
        <li>Mileage:{mileage}</li>
        <li>Price: {rentalPrice}</li>
      </RentalBlockBottom>
      <a href="tel:+380730000000">
        <ButtonRental>Rental car</ButtonRental>
      </a>
    </Wrapper>
  );
};

export default ModalCard;
