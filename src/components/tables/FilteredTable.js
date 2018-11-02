import React from 'react';
import Button from '../general/Button';
import Exchanges from '../exchanges/Exchanges';
import Filters from '../general/Filters';
import Loader from '../general/Loader';
import Pager from './Pager';
import Table from './Table';
import TableHead from './TableHead';
import TableBody from './TableBody';

export default (props) => {
  return props.loading ?
    (<Loader/>) :
    (
      <div>
        <Exchanges/>
        <Filters
          allFilters={props.allFilters}
          filters={props.filters}
          filtersList={props.filtersList}
          onFiltersChange={props.onFiltersChange}
        />
        <Table>
          <TableHead headers={props.tableHeaders}/>
          <TableBody
            contentParser={props.contentParser}
            elements={props.tableElements}
          />
        </Table>
        <Pager show={props.nextPage || props.prevPage}>
          <Button
            active={props.prevPage}
            disabled={!props.prevPage}
            medium={true}
            onClick={() => props.loadPage(props.currentPage-1)}
            text="Prev"
            width="150px"
          />
          <Button
            active={props.nextPage}
            disabled={!props.nextPage}
            medium={true}
            onClick={() => props.loadPage(props.currentPage+1)}
            text="Next"
            width="150px"
          />
        </Pager>
      </div>
    );
}
