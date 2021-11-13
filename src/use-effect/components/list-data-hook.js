import React from 'react';

import {myApi} from '../my-api';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const ListDataHook = () => {
  const [data, setData] = React.useState([]);
  const [userId, setUserId] = React.useState(1);

  const handleUserId = () => {
    const randomId = getRandomInt(1, 5);
    setUserId(randomId);
  };

  React.useEffect(() => {
    async function fetchData() {
      const data = await myApi.fakeFetch(userId);
      setData(data);
    }
    fetchData();
  }, [userId]);

  React.useEffect(() => {
    console.log(':o');
  }, []);

  return (
    <>
      <h3>User ID: {userId}</h3>
      {data.map(({label}) => (
        <p key={label}>{label}</p>
      ))}
      <button onClick={handleUserId}>Update user id</button>
    </>
  );
};
