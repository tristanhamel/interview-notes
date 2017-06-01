import * as React from 'react';

import { QuestionnairesTable } from './QuestionnairesTable';
import { NewQuestionnaire } from './NewQuestionnaire';

export const GroupView = (props) => {
  const editQuestionnaire = (id) => {
    console.log('went to edit questionnaire ' + id);
  };

  return (
    <div>
      <h2>{props.group.title}</h2>
      <div className="small">Created on {new Date(props.group.created_at).toDateString()}</div>
      <div className="small">Last modified: {new Date(props.group.last_modified).toDateString()}</div>
      <button className="btn btn-default">
        Edit template
      </button>

      <h3>Questionnaires:</h3>
      <ul>
        {props.group.questionnaires.map((q, i) => {
          return (
            <li key={i}>
              <a onClick={() => editQuestionnaire(q.id)}>{q.title}</a>
              <span className="glyphicon glyphicon-trash"
                    onClick={() => props.onDeleteQuestionnaire(q.id)}></span>
            </li>
          );
        })}
         <li>
           <NewQuestionnaire onAddQuestionnaire={props.onAddQuestionnaire}></NewQuestionnaire>
         </li>
      </ul>

      <QuestionnairesTable group={props.group}></QuestionnairesTable>
    </div>
  );
};
