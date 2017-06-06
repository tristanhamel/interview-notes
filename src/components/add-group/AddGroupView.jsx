import React from 'react';
import PropTypes from 'prop-types';

import { PGroup } from '../../proptypes';

import { EditText } from '../EditText';

export class AddGroupView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'New Group',
      description: 'Group description'
    };
  }

  render() {
    return <div className="add-group-view panel panel-default">
      <div>
        <EditText onChange={title => this.editGroupProp({ title })}
                  text={this.state.title}
                  textClass="group-title-edit h2">
        </EditText>

        <EditText onChange={description => this.editGroupProp({ description })}
                  text={this.state.description}
                  long={true}
                  textClass="lead">
        </EditText>

        Template: <div>Choose a template</div>
      </div>
    </div>;
  }
}
AddGroupView.propTypes = {
  onAddGroup: PropTypes.func,
  groups: PropTypes.arrayOf(PGroup)
};
