import React from 'react';

import {EnterKey} from './enter-key';
import {EnterKeyHook} from './enter-key-hook';

export const UseEffectPage = () => (
  <>
    <h2>Hook useEffect - subscripciones</h2>
    <h3>Con Clase</h3>
    <EnterKey />

    <hr />
    <h3>Con Hook</h3>
    <EnterKeyHook />
  </>
);
