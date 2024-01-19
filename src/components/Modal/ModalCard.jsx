import React from 'react';
import { Wrapper } from './ModalCard.styled';

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

  return (
    <Wrapper>
      <button onClick={closeModal}>close</button>
      <img src={img} alt="" width={460} height={248} />
      <h1>
        {make} {model}, {year}
      </h1>
      <ul>
        <li>{address}</li>
        <li>id:{id}</li>
        <li>Year:{year}</li>
        <li>Type: {type}</li>
        <li>Fuel Consumption: {fuelConsumption}</li>
        <li>Engine Size: {engineSize}</li>
      </ul>
      <p>{description}</p>
      <p>Accessories and functionalities:</p>
      <ul>
        <li>{accessories[0]}</li>
        <li>{accessories[1]}</li>
        <li>{functionalities[0]}</li>
        <li>{accessories[2]}</li>
        <li>{functionalities[1]}</li>
        <li>{functionalities[2]}</li>
      </ul>
      <p>Rental Conditions: </p>
      <ul>
        <li>{minimumAge}</li>
        <li>{validLicense}</li>
        <li>{depositRequired}</li>
        <li>{mileage}</li>
        <li>{rentalPrice}</li>
      </ul>
      <button>Rental car</button>
    </Wrapper>
  );
};

export default ModalCard;
