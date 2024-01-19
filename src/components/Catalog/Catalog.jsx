import React, { useEffect, useState } from 'react';
import { fetchCars } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  BlockCars,
  BlockInfoTop,
  BlockName,
  ButtonFavorite,
  ButtonLearnMore,
  ButtonLoadMOre,
  ButtonSearch,
  CarCard,
  Img,
  ImgContainer,
  InputLeft,
  InputRight,
  ModelText,
  RentalPriceText,
  SelBrand,
 
  SelectPrice,
  SelectWrap,
  SeparatorLine,
  TextInput,
  WrapForm,
  WrapSelect,
} from './Catalog.styled';
import favoritIcon from '../../common/images/heart.svg';

import MainModal from 'components/Modal/MainModal';
import ModalCard from 'components/Modal/ModalCard';

const Catalog = () => {
  const adverts = useSelector(state => state.adverts.adverts);

  const [modalActive, setModalActive] = useState(false);
  const [cardData, setCardData] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const openCard = carData => {
    setModalActive(true);
    setCardData(carData);
  };

  return (
    <div>
      <WrapForm>
        <WrapSelect>
          <li>
            <TextInput>Car brand</TextInput>
            <SelectWrap>
              <SelBrand id="" name="">
                <option value="">Enter the text</option>
              </SelBrand>
            </SelectWrap>
          </li>
          <li>
            <TextInput>Price/ 1 hour</TextInput>
            <SelectWrap>
              <SelectPrice name="" id="">
                <option value="">To $</option>
              </SelectPrice>
            </SelectWrap>
          </li>
        </WrapSelect>
        <div>
          <div>
            <TextInput>Car mileage / km</TextInput>

            <InputLeft type="text" placeholder="From" />

            <InputRight type="text" placeholder="To" />
          </div>
        </div>
        <ButtonSearch>Search</ButtonSearch>
      </WrapForm>

      <BlockCars>
        {adverts.length &&
          adverts.map(
            (
              {
                id,
                img,
                year,
                type,
                model,
                mileage,
                address,
                engineSize,
                rentalPrice,
                accessories,
                rentalCompany,
                functionalities,
                fuelConsumption,
                rentalConditions,
                make,
                description,
              },
              index
            ) => {
              const words = address.split(',');
              const city = words[words.length - 2];
              const country = words[words.length - 1];

              const combinedArray = accessories.concat(functionalities);
              const randomElement = arr => {
                const randIndex = Math.floor(Math.random() * arr.length);
                return arr[randIndex];
              };
              const randomItem = randomElement(combinedArray);

              return (
                <CarCard key={id}>
                  <ButtonFavorite>
                    <img src={favoritIcon} alt="" />
                  </ButtonFavorite>
                  <ImgContainer>
                    <Img src={img} alt="" width={274} height={268} />
                  </ImgContainer>

                  <BlockName>
                    <li>
                      {make} {index < 3 && <ModelText>{model}</ModelText>},{' '}
                      {year}
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
                  <ButtonLearnMore
                    onClick={() =>
                      openCard({
                        id,
                        img,
                        year,
                        type,
                        model,
                        mileage,
                        address,
                        engineSize,
                        rentalPrice,
                        accessories,
                        functionalities,
                        fuelConsumption,
                        rentalConditions,
                        make,
                        description,
                      })
                    }
                  >
                    Learn more
                  </ButtonLearnMore>
                </CarCard>
              );
            }
          )}
      </BlockCars>
      <ButtonLoadMOre>Load more</ButtonLoadMOre>
      <MainModal active={modalActive} setActive={setModalActive}>
        <ModalCard
          closeModal={() => setModalActive(false)}
          carData={cardData}
        />
      </MainModal>
    </div>
  );
};
export default Catalog;
