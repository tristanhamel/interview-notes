import React from 'react';
import PropTypes from 'prop-types';
import { PGroup } from '../../proptypes';
import { Link } from 'react-router-dom';

import { QuestionnairesTable } from './QuestionnairesTable';
import { EditText } from '../EditText';
import { AddQuestionnaire } from './AddQuestionnaire';

import './group-view.scss';

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
      <div className="group-view panel panel-default">
        <div className="panel-heading group-heading">
          <div>
            <EditText onChange={title => this.editGroupProp({ title })}
                      text={this.props.group.title}
                      textClass="group-title-edit h2">
            </EditText>
            <span className="glyphicon glyphicon-trash action-icon"
                  onClick={e => this.deleteGroup(e)}></span>

            <div className="small text-muted group-details">
              <div>Created on {new Date(this.props.group.created_at).toDateString()}</div>
              <div>Last modified: {new Date(this.props.group.last_modified).toDateString()}</div>
            </div>
          </div>

          <div>
            <Link to={`/edit-template/${this.props.group.id}`}>
              <button className="btn btn-default">
                Edit template
              </button>
            </Link>
          </div>
        </div>

        <div className="panel-body">
          <EditText onChange={description => this.editGroupProp({ description })}
                    text={this.props.group.description}
                    long={true}
                    textClass="lead">
          </EditText>

          <h3>Questionnaires:</h3>
          <ul className="questionnaires-list">
            {this.props.group.questionnaires.map((q, i) => {
              return (
                <li key={i}>
                  <Link to={`/questionnaire/${this.props.group.id}/${q.id}`}>
                    {q.title}
                  </Link>
                  <span className="glyphicon glyphicon-trash action-icon"
                        onClick={() => this.props.onDeleteQuestionnaire(q.id)}></span>
                </li>
              );
            })}
             <li className="questionnaires-list-add">
               <AddQuestionnaire onSave={newTitle => this.props.onAddQuestionnaire(newTitle)} />
             </li>
          </ul>

          <QuestionnairesTable group={this.props.group}></QuestionnairesTable>
        </div>
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