import React from 'react';
import TableBodyCol from './TableBodyCol';
import TableBodyRow from './TableBodyRow';

export default ({contentParser, elements}) => (
  <tbody>
    {elements.map((element, key) => (
      <TableBodyRow key={key}>
        {contentParser(element).map((column, key) => (
          <TableBodyCol key={key}>
            {column}
          </TableBodyCol>
        ))}
      </TableBodyRow>
    ))}
  </tbody>
);
