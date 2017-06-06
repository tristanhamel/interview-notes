import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { PGroup } from '../../proptypes';

import { EditText } from '../EditText';
import { SelectDropDown } from '../SelectDropDown';

import './add-group.scss';

export class AddGroupView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      title: 'New Group',
      description: 'Group description'
    };
  }

  add() {
    if(!this.state.template) {
      return;
    }

    this.props.onAddGroup(this.state)
      .then(group => {
        this.setState(group);
      });
  }

  render() {
    const availableTemplates = this.props.groups
        .map(group => ({
          title: group.title,
          groupId: group.id
        }));

    return this.state.id ?
      <Redirect to={`/${this.state.id}`} /> :
      <div className="add-group-view panel panel-default">
        <div className="panel-heading group-heading">
          <EditText onChange={title => this.setState({ title })}
                    text={this.state.title}
                    textClass="group-title-edit h2">
          </EditText>

          <SelectDropDown onSelect={(template) => this.setState({template})}
                          activeClass="active"
                          options={availableTemplates}
                          renderHeader={(option) => (
                            <button className="btn btn-primary select-template-btn">
                              {this.state.template ? option.title  : 'select a template'}
                            </button>
                          )}
                          renderOption={(option) => (<span>{option.title}</span>)}
                          selectedOption={this.state.template}/>
        </div>
        <div className="panel-body">
          <EditText onChange={description => this.setState({ description })}
                    text={this.state.description}
                    long={true}
                    textClass="lead">
          </EditText>
          <button className="btn btn-primary"
                  onClick={() => this.add()}
                  disabled={!this.state.template}>
            Create group
          </button>
        </div>
      </div>;
  }
}
AddGroupView.propTypes = {
  onAddGroup: PropTypes.func,
  groups: PropTypes.arrayOf(PGroup)
};
