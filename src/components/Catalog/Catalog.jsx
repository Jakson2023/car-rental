import React, { useEffect, useState } from 'react';
import { fetchAllCars, fetchCars } from '../../redux/operations';
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
import makes from '../Utils/makes.json'
import SingleCard from 'components/CarCard/CarCard';

const Catalog = () => {

  const adverts = useSelector(state => state.adverts.adverts);
  const alladverts = useSelector(state => state.adverts.alladverts);
  
  const [selectedMake, setSelectedMake] = useState('');
  const dispatch = useDispatch();

  let filteredCars;
  if (selectedMake === "") {
    filteredCars = adverts && adverts.length ? adverts : [];
} else {
  filteredCars = alladverts && alladverts.length
    ? alladverts.filter(car => car.make === selectedMake)
    : [];
}

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

const handleFilter = (e) => {
  setSelectedMake(e)
  dispatch(fetchAllCars())
}

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
              <SelBrand id="make" name="make"
              value={selectedMake}
              onChange={e => handleFilter(e.target.value)}>
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
          filteredCars.map((item, index) => {
            return <SingleCard item={item} key={item.id} style={{
              color: index < 3 ? '#3470ff' : '',
              
            }}/>;
          })}
      </BlockCars>
      
      {adverts.length !== 0 && <ButtonLoadMOre onClick={loadMoreClick}>Load more</ButtonLoadMOre>}
    </div>
  );
};
export default Catalog;
