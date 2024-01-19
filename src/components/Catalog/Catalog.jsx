import React, { useEffect, useState } from 'react';
import { fetchCars } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  BlockCars,
  BlockInfoBottom,
  BlockInfoTop,
  BlockName,
  ButtonFavorite,
  ButtonLearnMore,
  ButtonSearch,
  CarCard,
  ImgContainer,
  InputLeft,
  InputRight,
  ModelText,
  RentalPriceText,
  SelBrand,
  SelBrandWrap,
  SelectPrice,
  SelectWrap,
  Separator,
  TextInput,
  WrapForm,
  WrapSelect,
} from './Catalog.styled';
import favoritIcon from '../../common/images/heart.svg';

import line from '../../common/images/line.svg';
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
          <SelBrandWrap>
            <TextInput>Car brand</TextInput>
            <SelectWrap>
              <SelBrand id="" name="">
                <option value="">Enter the text</option>
              </SelBrand>
            </SelectWrap>
          </SelBrandWrap>
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
              const truncatedAddress = address.split(' ').slice(-2).join(' ');

              return (
                <CarCard key={id}>
                  <ButtonFavorite>
                    <img src={favoritIcon} alt="" />
                  </ButtonFavorite>
                  <ImgContainer>
                    <img src={img} alt="" width={274} height={268} />
                  </ImgContainer>

                  <BlockName>
                    <li>
                      {make} {index < 3 && <ModelText>{model}</ModelText>},{' '}
                      {year}
                    </li>

                    <RentalPriceText>{rentalPrice}</RentalPriceText>
                  </BlockName>
                  <BlockInfoTop>
                    <li>{truncatedAddress}</li>
                    <Separator src={line} alt="" />
                    <li>{rentalCompany} </li>
                    <Separator src={line} alt="" />
                    <li></li>
                    <li>{type}</li>
                  </BlockInfoTop>
                  <BlockInfoBottom>
                    <li>{model}</li>
                    <Separator src={line} alt="" />
                    <li>{id}</li>
                    <li></li>
                    {/* <li>{functionalities}</li> */}
                  </BlockInfoBottom>
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
      <button>load more</button>
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
