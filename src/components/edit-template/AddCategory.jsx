import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';

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
      <Autocomplete getItemValue={item => item}
                    items={this.props.categories}
                    renderItem={(item, isHighlighted) =>
                      <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                        {item}
                      </div>
                    }
                    shouldItemRender={(item, value) => item.toLowerCase().indexOf(value.toLowerCase()) !== -1}
                    onChange={(e, value) => this.setState({selectedCat: value})}
                    onSelect={(value) => this.add(value)}
                    value={this.state.selectedCat} />
    </div>;
  }
}
AddCategory.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  onAdd: PropTypes.func
};
