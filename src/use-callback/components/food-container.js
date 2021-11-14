import React from 'react';

import {FoodList} from './food-list';

const food = [
  {id: 1, name: 'pizza'},
  {id: 2, name: 'hamburger'},
  {id: 3, name: 'hot-dog'},
  {id: 4, name: 'tacos'},
  {id: 5, name: 'pizza again :)'},
];

export const FoodContainer = () => {
  console.log('FoodContainer rendered');

  const [foodList, setFoodList] = React.useState(food);
  const [textInput, setTextInput] = React.useState('');

  const handleChange = ({target}) => setTextInput(target.value);

  const removeItem = React.useCallback(
    id => setFoodList(foodList.filter(foodItem => foodItem.id !== id)),
    [foodList],
  );

  return (
    <>
      <h2>My Food List</h2>
      <p>
        New food
        <input value={textInput} onChange={handleChange} />
      </p>
      <FoodList foodList={foodList} removeItem={removeItem} />
    </>
  );
};
