import React from 'react';
import PropTypes from 'prop-types';

import './EditText.scss';

export class EditText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      newText: ''
    };
  }

  onChange(newText) {
    this.setState({newText});
  }

  onEdit() {
    this.setState({isEditing: true, newText: this.props.text});
  }

  onSave(e) {
    this.props.onSave(this.state.newText);
    e.preventDefault();
    this.reset();
  }

  reset() {
    this.setState({isEditing: false, newText: ''});
  }

  render() {
    return (
      <div className="edit-text">
        {!this.state.isEditing &&
        <div onClick={() => this.onEdit()}>
          {this.props.children}
        </div>
        }
        {this.state.isEditing &&
        <form onSubmit={e => this.onSave(e)}>
          <div className="edit-text-input-container">
            {!this.props.long &&
              <input className={`${this.props.textClass} edit-text-input`}
                     type="text"
                     value={this.state.newText}
                     onChange={e => this.onChange(e.target.value)}
                     placeholder={this.props.placeholder || ''}/>
            }
            {this.props.long &&
              <textarea value={this.state.newText}
                        className={`${this.props.textClass} edit-text-input`}
                        onChange={e => this.onChange(e.target.value)}/>
            }
          </div>
          <div className="edit-text-button-container">
            <button className="edit-text-button small" type="submit">
              {this.props.submitLabel || 'OK'}
            </button>
            <button className="edit-text-button small" type="cancel" onClick={() => this.reset()}>
              {this.props.cancelLabel || 'Cancel'}
            </button>
          </div>
        </form>
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
  submitLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  onSave: PropTypes.func,
  textClass: PropTypes.string
};
