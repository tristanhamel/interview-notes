import React from 'react';

import { PGroupReselect } from '../../proptypes';

import { QuestionnaireTableCell } from './QuestionnaireTableCell';

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

                  return (
                    <td key={j}>
                      <QuestionnaireTableCell question={question}
                                              response={response}/>
                    </td>
                  );
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