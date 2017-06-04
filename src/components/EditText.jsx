import React from 'react';
import PropTypes from 'prop-types';

import './EditText.scss';

export class EditText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="edit-text">
        {!this.props.long &&
          <input className={`${this.props.textClass} edit-text-input`}
                 type="text"
                 value={this.props.text}
                 onChange={e => this.props.onChange(e.target.value)}
                 placeholder={this.props.placeholder || ''}/>
        }
        {this.props.long &&
          <textarea value={this.props.text}
                    className={`${this.props.textClass} edit-text-input`}
                    onChange={e => this.props.onChange(e.target.value)}/>
        }
      </div>
    );
  }
}
EditText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  text: PropTypes.string,
  long: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  textClass: PropTypes.string
};
