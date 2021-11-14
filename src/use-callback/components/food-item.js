import React from 'react';

export const FoodItem = React.memo(({item, removeItem}) => {
  console.log('FoodItem rendered');
  return (
    <>
      <li>{item.name}</li>
      <button onClick={() => removeItem(item.id)}>Remove :(</button>
    </>
  );
});
