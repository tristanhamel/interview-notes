import React from 'react';

export const QuestionnairesTable = (props) => {
  return (
    <div>
      <table>
        <th>
          <td></td>
          {props.group.questionnaires.map((q, i) => {
            return (
              <td>
                {q.title}
              </td>
            );
          })}
        </th>
        {props.group.template.questions.map((question, i) => {
          return (
            <tr key={i}>
              <td>
                {question.label}
              </td>

              {props.group.questionnaires.map((q, j) => {
                return (
                  <td key={j}>
                    {q.responses.find(r => r.questionId === question.id).value}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
};
