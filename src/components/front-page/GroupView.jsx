import * as React from 'react';

import { QuestionnairesTable } from './QuestionnairesTable';
import { NewQuestionnaire } from './NewQuestionnaire';

export class GroupView extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      isEditingTitle: false,
      newTitle: ''
    };
  }

  editQuestionnaire(id) {
    console.log('went to edit questionnaire ' + id);
  }

  onChange(newTitle) {
    this.setState({newTitle});
  }

  onEditTitle() {
    this.setState({isEditingTitle: true, newTitle: this.props.group.title});
  }

  resetEditTitle() {
    this.setState({isEditingTitle: false, newTitle: ''});
  }

  saveEditTitle(e) {
    this.props.onEditGroupTitle(this.state.newTitle, this.props.group.id);
    e.preventDefault();
    this.resetEditTitle();
  }

  render() {
    return (
      <div>
        {!this.state.isEditingTitle &&
          <div>
            <h2 onClick={() => this.onEditTitle()}>{this.props.group.title}</h2>
            <span className="glyphicon glyphicon-trash"
                  onClick={() => this.props.onDeleteGroup(this.props.group.id)}></span>
          </div>
        }
        {this.state.isEditingTitle &&
          <form onSubmit={e => this.saveEditTitle(e)}>
            <input type="text"
                   value={this.state.newTitle}
                   onChange={e => this.onChange(e.target.value)}/>
            <button type="submit">OK</button>
            <button type="cancel" onClick={() => this.resetEditTitle()}>Cancel</button>
          </form>
        }
        <div className="small">Created on {new Date(this.props.group.created_at).toDateString()}</div>
        <div className="small">Last modified: {new Date(this.props.group.last_modified).toDateString()}</div>
        <div>{this.props.group.description}</div>
        <button className="btn btn-default">
          Edit template
        </button>

        <h3>Questionnaires:</h3>
        <ul>
          {this.props.group.questionnaires.map((q, i) => {
            return (
              <li key={i}>
                <a onClick={() => this.editQuestionnaire(q.id)}>{q.title}</a>
                <span className="glyphicon glyphicon-trash"
                      onClick={() => this.props.onDeleteQuestionnaire(q.id)}></span>
              </li>
            );
          })}
           <li>
             <NewQuestionnaire onAddQuestionnaire={this.props.onAddQuestionnaire}></NewQuestionnaire>
           </li>
        </ul>

        <QuestionnairesTable group={this.props.group}></QuestionnairesTable>
      </div>
    );
  }
}
