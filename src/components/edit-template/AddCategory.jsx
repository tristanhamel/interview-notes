import React from 'react';
import PropTypes from 'prop-types';

import { SelectDropDown } from '../SelectDropDown';

export class AddCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCat: ''
    };
  }

  add(value) {
    this.props.onAdd(value);
    this.setState({selectedCat: ''});
  }

  render() {
    return <div className="add-category">
      <span>Add a new category: </span>
      <SelectDropDown options={this.props.categories}
                      renderOption={(option) => <span>{option}</span>}
                      renderHeader={(option) => (
                        <button className="btn btn-primary select-category-btn">
                          {this.state.selectedCat ? option : 'select a template'}
                        </button>
                      )}
                      onSelect={(category) => this.add(category)}
                      activeClass="active"
                      selectedOption={this.state.selectedCat} />
    </div>;
  }
}
AddCategory.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  onAdd: PropTypes.func
};
