const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredient = items => {
  return items.map(item => {
    const liEl = document.createElement('li');
    liEl.textContent = item;
    liEl.classList.add('item');

    return liEl;
  });
}

const element = makeIngredient(ingredients);
const listEl = document.querySelector('#ingredients');
listEl.append(...element);
