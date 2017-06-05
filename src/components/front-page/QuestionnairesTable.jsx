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

        {Object.keys(props.group.questions).map((category, i) => {
          return (
            <tbody key={i}>
            <tr>
              <th>{category}</th>
            </tr>
            {props.group.questions[category].map((question, j) => {
              return (
                <tr key={j}>
                  <td>
                    {question.label}
                  </td>

                  {props.group.questionnaires.map((q, k) => {
                    const response = q.responses.find(r => r.questionId === question.id);

                    return (
                      <td key={k}>
                        {response && typeof response.value != 'undefined' &&
                        <QuestionnaireTableCell question={question}
                                                response={response}/>
                        }
                      </td>
                    );
                  })}
                </tr>);
            })}
            </tbody>);
        })}
      </table>
    </div>
  );
};
QuestionnairesTable.propTypes = {
  group: PGroupReselect
};