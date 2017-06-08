import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import ClickOutside from 'react-click-outside';

import './select-dropdown.scss';

export class SelectDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  select(option) {
    this.setState({isVisible: false});
    this.props.onSelect(option);
  }

  render() {
    return (
        <div className="select-dropdown">
          <div onClick={() => this.setState({isVisible: !this.state.isVisible})}>
            {this.props.renderHeader(this.props.selectedOption)}
          </div>
          {!this.state.isVisible ? null : (
            <ClickOutside onClickOutside={() => this.setState({isVisible: false})}>
              <div className="list-group select-dropdown-content">
                {this.props.options.map((option, i) => (
                  <button className={isEqual(this.props.selectedOption, option) ? `list-group-item ${this.props.activeClass}` : 'list-group-item'}
                       key={i}
                       onClick={() => this.select(option)}>
                    {this.props.renderOption(option)}
                  </button>
                ))}
              </div>
            </ClickOutside>
          )}
        </div>
    );
  }
}
SelectDropDown.propTypes = {
  activeClass: PropTypes.string,
  options: PropTypes.array,
  renderOption: PropTypes.func,
  onSelect: PropTypes.func,
  selectedOption: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  renderHeader: PropTypes.func
};