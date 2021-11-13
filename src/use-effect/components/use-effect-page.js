import React from 'react';

import {ListData} from './list-data';
import {ListDataHook} from './list-data-hook';

export const UseEffectPage = () => (
  <>
    <h2>Hook useEffect</h2>
    <ListData />

    <hr />

    <h2>Ejemplo con useEffect</h2>
    <ListDataHook />
  </>
);
