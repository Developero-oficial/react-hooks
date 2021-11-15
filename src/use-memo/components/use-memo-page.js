import React from 'react';

import {UseMemo} from './use-memo';
import {NormalClassComponent} from './normal-class-component';
import {PureComponent} from './pure-component';
import {WithMemo} from './with-memo';

export const UseMemoPage = () => {
  return (
    <>
      <h1>Ejemplos de Optimizaciones</h1>
      <NormalClassComponent title="normal class component" />
      <PureComponent title="Pure Component" />
      <WithMemo title="With Memo" />
      <UseMemo title="Hook useMemo" />
    </>
  );
};
