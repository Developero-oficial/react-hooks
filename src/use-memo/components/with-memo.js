import React from 'react';

const Title = ({title}) => <h1>{title.toUpperCase()}</h1>;

export const WithMemo = React.memo(Title);
