import React from 'react';
import TableHeadCol from './TableHeadCol';

export default ({headers}) => (
  <thead>
    <tr>
      {headers.map((header, key) => (
        <TableHeadCol key={key}>{header}</TableHeadCol>
      ))}
    </tr>
  </thead>
);
