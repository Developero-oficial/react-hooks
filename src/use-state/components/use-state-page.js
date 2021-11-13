import React from 'react';

import {ClassCounter} from './class-counter';
import {HookCounter} from './hook-counter';

export const UseStatePage = () => (
  <>
    <h2>Hook useState</h2>
    <h3>Estado con componente clase</h3>
    <ClassCounter />

    <hr />
    <h3>Estado con el Hook useState</h3>
    <HookCounter />
  </>
);
