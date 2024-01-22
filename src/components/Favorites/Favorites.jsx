import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  BlockCars,
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
} from '../Catalog/Catalog.styled';
import makes from '../Utils/makes.json';
import SingleCard from 'components/CarCard/CarCard';

const Favorites = () => {
  const favorites = useSelector(state => state.adverts.favorites);

  const [selectedMake, setSelectedMake] = useState('');

  const filteredCars =
    selectedMake === ''
      ? favorites
      : favorites.filter(car => car.make === selectedMake);

  const handleFilter = e => {
    setSelectedMake(e);
  };

  return (
    <div>
      <WrapForm>
        <WrapSelect>
          <li>
            <TextInput>Car brand</TextInput>
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
          <TextInputMileage>Car mileage / km</TextInputMileage>
          <div>
            <InputLeft type="text" placeholder="From" />
            <InputRight type="text" placeholder="To" />
          </div>
        </WrapInput>
        <ButtonSearch>Search</ButtonSearch>
      </WrapForm>

      <BlockCars>
        {favorites.length &&
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
    </div>
  );
};

export default Favorites;
