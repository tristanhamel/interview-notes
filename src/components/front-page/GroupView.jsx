import React from 'react';
import PropTypes from 'prop-types';
import { PGroup } from '../../proptypes';
import { Link } from 'react-router-dom';

import { QuestionnairesTable } from './QuestionnairesTable';
import { EditText } from '../EditText';

export class GroupView extends React.Component{
  constructor(props) {
    super(props);
  }

  editGroupProp(prop) {
    this.props.onEditGroupProp(prop, this.props.group.id);
  }

  deleteGroup(e) {
    e.preventDefault();
    this.props.onDeleteGroup(this.props.group.id);
  }

  render() {
    return (
      <div>
        <EditText onSave={title => this.editGroupProp({ title })}
                  text={this.props.group.title}>
          <div>
            <h2>{this.props.group.title}</h2>
            <span className="glyphicon glyphicon-trash"
                  onClick={e => this.deleteGroup(e)}></span>
          </div>
        </EditText>

        <div className="small">Created on {new Date(this.props.group.created_at).toDateString()}</div>
        <div className="small">Last modified: {new Date(this.props.group.last_modified).toDateString()}</div>
        <EditText onSave={description => this.editGroupProp({ description })}
                  text={this.props.group.description}
                  long={true}>
          <div>
            <span>{this.props.group.description}</span>
          </div>
        </EditText>
        <Link to={`/edit-template/${this.props.group.id}`}>
          <button className="btn btn-default">
              Edit template
          </button>
        </Link>

        <h3>Questionnaires:</h3>
        <ul>
          {this.props.group.questionnaires.map((q, i) => {
            return (
              <li key={i}>
                <Link to={`/questionnaire/${this.props.group.id}/${q.id}`}>
                  {q.title}
                </Link>
                <span className="glyphicon glyphicon-trash"
                      onClick={() => this.props.onDeleteQuestionnaire(q.id)}></span>
              </li>
            );
          })}
           <li>
             <EditText onSave={newTitle => this.props.onAddQuestionnaire(newTitle)}
                       text=""
                       placeholder="New Questionnaire"
                       submitLabel="Add">
               <span>Add a new questionnaire</span>
               &nbsp;
               <span className="glyphicon glyphicon-plus"></span>
             </EditText>
           </li>
        </ul>

        <QuestionnairesTable group={this.props.group}></QuestionnairesTable>
      </div>
    );
  }
}
GroupView.propTypes = {
  onEditGroupProp: PropTypes.func,
  onDeleteGroup: PropTypes.func,
  onDeleteQuestionnaire: PropTypes.func,
  onAddQuestionnaire: PropTypes.func,
  group: PGroup
};