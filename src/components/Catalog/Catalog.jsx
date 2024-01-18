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
  CarCard,
  ImgContainer,
  ModelText,
  RentalPriceText,
  Separator,
} from './Catalog.styled';
import favoritIcon from '../images/heart.svg';
import volvo from '../images/volvo.png';
import line from '../images/line.svg'

const Catalog = () => {
  const adverts = useSelector(state => state.adverts.adverts);
  console.log(adverts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      <div>
        <select name="" id=""></select>
        <select name="" id=""></select>
        <input type="text" />
        <input type="text" />
        <button></button>
      </div>

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
                    <img src={volvo} alt="" width={274} height={268} />
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