import React, { useState } from 'react';
import {
  BlockInfoTop,
  BlockName,
  ButtonFavorite,
  ButtonLearnMore,
  Img,
  ImgContainer,
  ModelText,
  RentalPriceText,
  SeparatorLine,
  CarCard,
} from './CarCard.styled';
import MainModal from 'components/Modal/MainModal';
import ModalCard from 'components/Modal/ModalCard';
import favoritIcon from '../../common/images/heart.svg';

const SingleCard = ({ item,style }) => {
  const [modalActive, setModalActive] = useState(false);

  const {
    id,
    img,
    year,
    type,
    model,
    address,
    accessories,
    rentalPrice,
    rentalCompany,
    functionalities,
    make,
  } = item;

  const words = address.split(',');
  const city = words[words.length - 2];
  const country = words[words.length - 1];

//*-----random accessories & functionalities----*//

  const combinedArray = accessories.concat(functionalities);
  const randomElement = arr => {
    const randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  };
  const randomItem = randomElement(combinedArray);
  
//*-----random accessories & functionalities----*//

  const openCard = () => {
    setModalActive(true);
  };

  return (
    <div>
      <CarCard>
        <ButtonFavorite>
          <img src={favoritIcon} alt="" />
        </ButtonFavorite>
        <ImgContainer>
          <Img src={img} alt="not found" width={274} height={268} />
        </ImgContainer>

        <BlockName>
          <li >
            {make} <ModelText style={style}>{model}</ModelText>, {year}
          </li>
          <RentalPriceText>{rentalPrice}</RentalPriceText>
        </BlockName>

        <BlockInfoTop>
          <SeparatorLine>{city}</SeparatorLine>
          <SeparatorLine>{country}</SeparatorLine>
          <SeparatorLine>{rentalCompany} </SeparatorLine>
          <li>{type}</li>
          <SeparatorLine>{model}</SeparatorLine>
          <SeparatorLine>{id}</SeparatorLine>
          <li>{randomItem}</li>
        </BlockInfoTop>

        <ButtonLearnMore onClick={() => openCard(id)}>
          Learn more
        </ButtonLearnMore>

      </CarCard>
      <MainModal active={modalActive} setActive={setModalActive}>
        <ModalCard closeModal={() => setModalActive(false)} carData={item} />
      </MainModal>
    </div>
  );
};

export default SingleCard;
