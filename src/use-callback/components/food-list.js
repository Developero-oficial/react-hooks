import React from 'react';

import {FoodItem} from './food-item';

export const FoodList = React.memo(({foodList, removeItem}) => {
  console.log('FoodList rendered');
  return (
    <ul>
      {foodList.map(item => (
        <FoodItem key={item.id} item={item} removeItem={removeItem} />
      ))}
    </ul>
  );
});
