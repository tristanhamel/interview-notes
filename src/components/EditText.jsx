import React from 'react';
import PropTypes from 'prop-types';

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
          {!this.props.long &&
            <input type="text"
                   value={this.state.newText}
                   onChange={e => this.onChange(e.target.value)}
                   placeholder={this.props.placeholder || ''}/>
          }
          {this.props.long &&
            <textarea value={this.state.newText}
                      onChange={e => this.onChange(e.target.value)}/>
          }
          <button type="submit">{this.props.submitLabel || 'OK'}</button>
          <button type="cancel" onClick={() => this.reset()}>{this.props.cancelLabel || 'Cancel'}</button>
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
  onSave: PropTypes.func
};
