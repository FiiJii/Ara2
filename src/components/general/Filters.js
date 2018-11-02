import React from 'react';
import Button from '../general/Button';
import { ALL_FILTERS } from '../../constants';

class Filters extends React.Component {
  areAllSelected = () => {
    const { filtersList } = this.props;
    return this.props.filters.length === filtersList.length;
  }

  isSelected = (value) => {
    return this.props.filters.map(filter => filter.value).includes(value);
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
        filters.splice(filters.map(filter => filter.value).indexOf(value), 1);
      } else {
        filters.push(filtersList.find(filter => filter.value === value));
      }
    }

    if (filters.length === 0) {
      filters = filtersList;
    }

    this.props.onFiltersChange(filters);
  }

  render() {
    const allActive = this.areAllSelected();
    let buttons = [];

    this.props.filtersList.forEach((filter, key) => {
      buttons.push(
        <Button
          active={this.isSelected(filter.value)}
          onClick={this._handleFilterToggle.bind(this)}
          text={filter.text}
          value={filter.value}
        />
      );
    });

    if (this.props.allFilters) {
      buttons.push(
        <Button
          active={allActive}
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
