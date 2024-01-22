import React, { useState } from 'react';
import {
  BlockInfoTop,
  BlockName,
  ButtonFavorite,
  ButtonLearnMore,
  Img,
  ImgContainer,
  RentalPriceText,
  SeparatorLine,
  CarCard,
} from './CarCard.styled';
import MainModal from 'components/Modal/MainModal';
import ModalCard from 'components/Modal/ModalCard';
import favoritIcon from '../../common/images/heartblue.svg';
import notFavoritIcon from '../../common/images/heart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/slice';

const SingleCard = ({ item, style }) => {
  const favorites = useSelector(state => state.adverts.favorites);
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
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

  const addRemoveFavorites = e => {
    const { id } = e;
    const checkId = favorites.map(item => item.id);
    if (!checkId.includes(id)) {
      dispatch(addToFavorites(e));
    } else {
      dispatch(removeFromFavorites(e));
    }
  };

  const checkFavorit = item => {
    const { id } = item;
    const checkId = favorites.map(item => item.id);
    if (checkId.includes(id)) {
      return true;
    }
  };

  return (
    <div>
      <CarCard>
        <ButtonFavorite onClick={() => addRemoveFavorites(item)}>
          {checkFavorit(item) ? (
            <img src={favoritIcon} alt="Active Favorite" />
          ) : (
            <img src={notFavoritIcon} alt="Inactive Favorite" />
          )}
        </ButtonFavorite>
        <ImgContainer>
          <Img src={img} alt="not found" width={274} height={268} />
        </ImgContainer>

        <BlockName>
          <li>
            {make} <span style={style}>{model}</span>, {year}
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
