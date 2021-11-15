import React from 'react';

export const UseMemo = ({title}) => {
  const upperCaseTitle = React.useMemo(() => title.toUpperCase(), [title]);

  return <h1>{upperCaseTitle}</h1>;
};
