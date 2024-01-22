import React, { useEffect, useState } from 'react';
import { fetchAllCars, fetchCars } from '../../redux/operations';
import { nextPage,resetPage } from '../../redux/slice';
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
  TextInputMileage,
  WrapForm,
  WrapInput,
  WrapSelect,
} from './Catalog.styled';
import makes from '../Utils/makes.json';
import SingleCard from 'components/CarCard/CarCard';
import { filterCars } from 'components/Utils/utils';

const Catalog = () => {
  const adverts = useSelector(state => state.adverts.adverts);
  const alladverts = useSelector(state => state.adverts.alladverts);

  const [selectedMake, setSelectedMake] = useState('');
  const dispatch = useDispatch();

  const filteredCars = filterCars(selectedMake, adverts, alladverts);
  
  useEffect(() => {
    dispatch(fetchCars());
    
      dispatch(resetPage());
   
  }, [dispatch]);

  const handleFilter = e => {
    setSelectedMake(e);
    dispatch(fetchAllCars());
  };

  const loadMoreClick = () => {
    dispatch(nextPage());
    dispatch(fetchCars());
  };




  return (
    <div>
      <WrapForm>
        <WrapSelect>
          <li>
            <TextInput htmlFor="make">Car brand</TextInput>
            <SelectWrap>
              <SelBrand
                id="make"
                name="make"
                value={selectedMake}
                onChange={e => handleFilter(e.target.value)}
              >
                <option value="">All makes</option>
                {makes.map((make, index) => (
                  <option key={index} value={make}>
                    {make}
                  </option>
                ))}
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
        <WrapInput>
          <TextInputMileage htmlFor='from'>Car mileage / km</TextInputMileage>
          <div>
            <InputLeft id='from' type="text" placeholder="From" />
            <InputRight type="text" placeholder="To" />
          </div>
        </WrapInput>
        <ButtonSearch>Search</ButtonSearch>
      </WrapForm>

      <BlockCars>
        {adverts.length &&
          filteredCars.map((item, index) => {
            return (
              <SingleCard
                item={item}
                key={item.id}
                style={{
                  color: index < 3 ? '#3470ff' : '',
                }}
              />
            );
          })}
      </BlockCars>

      {adverts.length > 1 && (
        <ButtonLoadMOre onClick={loadMoreClick}>Load more</ButtonLoadMOre>
      )}
    </div>
  );
};
export default Catalog;
