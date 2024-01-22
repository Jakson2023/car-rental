export const modalScrollOff = active => {
  if (active) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

export function filterCars(selectedMake, adverts, alladverts) {
  if (selectedMake === '') {
    return adverts && adverts.length ? adverts : [];
  } else {
    return alladverts && alladverts.length
      ? alladverts.filter(car => car.make === selectedMake)
      : [];
  }
}
