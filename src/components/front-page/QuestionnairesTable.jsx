import React from 'react';

import { PGroupReselect } from '../../proptypes';

export const QuestionnairesTable = (props) => {
  return (
    <div>
      <table className="table">

        <thead>
          <tr>
            <th></th>
            {props.group.questionnaires.map((q, i) => {
              return (
                <th key={i}>
                  {q.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.group.template.questions.map((question, i) => {
            return (
              <tr key={i}>
                <td>
                  {question.label}
                </td>

                {props.group.questionnaires.map((q, j) => {
                  const response = q.responses.find(r => r.questionId === question.id);
                  const value = response ? response.value : null;

                  if(question.type === 'checkBox' && value !== null) {
                    return value ? <td key={j}> {question.options[0]}</td> : <td key={j}>{question.options[1]}</td>;
                  } else {
                    return <td key={j}>{value}</td>;
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
QuestionnairesTable.propTypes = {
  group: PGroupReselect
};