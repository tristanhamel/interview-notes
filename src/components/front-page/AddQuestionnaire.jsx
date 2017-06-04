import React from 'react';
import PropTypes from 'prop-types';

import { EditText } from '../EditText';

import './add-questionnaire.scss';

export class AddQuestionnaire extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      newTitle: ''
    };
  }

  edit() {
    this.setState({isEditing: true});
  }

  reset() {
    this.setState({isEditing: false, newTitle: ''});
  }

  save() {
    this.props.onSave(this.state.newTitle);
    this.reset();
  }

  render() {
    return (
      <div className="add-questionnaire">
        {!this.state.isEditing &&
          <div onClick={() => this.edit()}>
            <span>Add a new questionnaire</span>
            &nbsp;
            <span className="glyphicon glyphicon-plus"></span>
          </div>
        }
        {this.state.isEditing &&
          <div className="add-questionnaire-form">
            <EditText onChange={newTitle => this.setState({newTitle})}
                      text={this.state.newTitle}
                      placeholder="New Questionnaire">
            </EditText>
            <div className="add-questionnaire-button-container">
              <button className="add-questionnaire-button small"
                      type="submit"
                      onClick={() => this.save()}>
                Add
              </button>
              <button className="add-questionnaire-button small"
                      type="cancel"
                      onClick={() => this.reset()}>
                Cancel
              </button>
            </div>
          </div>
        }
      </div>
    );
  }
}
AddQuestionnaire.propTypes = {
  onSave: PropTypes.func
};
