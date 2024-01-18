import React, { useEffect } from 'react';
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
  ModelText,
  RentalPriceText,
  SelBrand,
  Separator,
  WrapForm,
  WrapSelect,
} from './Catalog.styled';
import favoritIcon from '../images/heart.svg';

import line from '../images/line.svg';

const Catalog = () => {
  const adverts = useSelector(state => state.adverts.adverts);
  console.log(adverts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      <WrapForm>
        <WrapSelect>
          <SelBrand>
            <p>Car brand</p>
            <select name="" id="">
              <option value="">Enter the text</option>
            </select>
          </SelBrand>
          <li>
            <p>Price/ 1 hour</p>
            <select name="" id="">
              <option value="">To $</option>
            </select>
          </li>
        </WrapSelect>
        <div>
          <div>
        <p>Car mileage / km</p>
          
          <input type="text" placeholder="From" />
        
        <input type="text" placeholder="To" />
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
                make,
                model,
                year,
                rentalPrice,
                address,
                rentalCompany,
                type,
                functionalities,
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
                  <ButtonLearnMore>Learn more</ButtonLearnMore>
                </CarCard>
              );
            }
          )}
      </BlockCars>
      <button>load more</button>
    </div>
  );
};
export default Catalog;
