import React, { useEffect } from 'react';
import { fetchCars } from '../../redux/operations';
import {nextPage} from '../../redux/slice'
import { useDispatch, useSelector } from 'react-redux';
import {
  BlockCars,
  ButtonLoadMOre,
  ButtonSearch,
  InputLeft,
  InputRight,
  SelBrand,
  SelectPrice,
  SelectWrap,
  TextInput,
  WrapForm,
  WrapSelect,
} from './Catalog.styled';

import SingleCard from 'components/CarCard/CarCard';

const Catalog = () => {
  const adverts = useSelector(state => state.adverts.adverts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const loadMoreClick = ()=>{

    dispatch(nextPage())
    dispatch(fetchCars())
  }

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
          adverts.map((item, index) => {
            return <SingleCard item={item} key={item.id} style={{
              color: index < 3 ? '#3470ff' : '',
              
            }}/>;
          })}
      </BlockCars>
      
      <ButtonLoadMOre onClick={loadMoreClick}>Load more</ButtonLoadMOre>
    </div>
  );
};
export default Catalog;
