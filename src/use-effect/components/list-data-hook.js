import React from 'react';

import {myApi} from '../my-api';

export const ListDataHook = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const data = await myApi.fakeFetch();
      setData(data);
    }
    fetchData();
  }, []);

  return data.map(({label}) => <p key={label}>{label}</p>);
};
