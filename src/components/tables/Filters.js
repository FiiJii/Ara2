import React from 'react';
import Button from '../general/Button';
import { ALL_FILTERS } from '../../constants';

class Filters extends React.Component {
  areAllSelected = () => {
    const { filters, filtersList } = this.props;
    return filters.length === filtersList.length;
  }

  isSelected = (value) => {
    return this.props.filters.includes(value);
  }

  componentDidMount() {
    const filters = this.props.filters;

    this.setState({filters})
  }

  _handleFilterToggle(event) {
    const { filtersList } = this.props;
    const { value } = event.target;
    let { filters } = this.props;

    if (value === ALL_FILTERS) {
      filters = filtersList;
    } else {
      if (this.areAllSelected()) {
        filters = [];
      }

      if (!this.areAllSelected() && this.isSelected(value)) {
        filters.splice(filters.indexOf(value), 1);
      } else {
        filters.push(filtersList.find(filter => filter === value));
      }
    }

    if (filters.length === 0) {
      filters = filtersList;
    }

    this.props.onFiltersChange(filters, value);
  }

  render() {
    const allActive = this.areAllSelected();
    let buttons = [];

    this.props.filtersList.forEach((filter, key) => {
      buttons.push(
        <Button
          active={this.isSelected(filter)}
          key={key}
          onClick={this._handleFilterToggle.bind(this)}
          text={filter}
          textTransform="uppercase"
          value={filter}
        />
      );
    });

    if (this.props.allFilters) {
      buttons.push(
        <Button
          active={allActive}
          key={this.props.filtersList.length}
          onClick={this._handleFilterToggle.bind(this)}
          text="ALL"
          value={ALL_FILTERS}
          disabled={allActive}
        />
      );
    }

    return (
      <div>
        {buttons}
      </div>
    )
  }
}

export default Filters;
