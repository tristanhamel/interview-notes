import React from 'react';

import { PGroupReselect } from '../../proptypes';

import { QuestionnaireTableCell } from './QuestionnaireTableCell';

export const QuestionnairesTable = (props) => {
  const color = (score) => {
    // https://stackoverflow.com/questions/17525215/calculate-color-values-from-green-to-red
    // as the function expects a value between 0 and 1, and red = 0° and green = 120°
    // we convert the input to the appropriate hue value
    return score != null ? `hsl(${score * 120}, 80%, 80%)` : 'none';
  };

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
                    const response = q.responses.find(r => r.question === question.id);

                    return (
                      <td key={k}
                          style={response ? {background: color(response.score)} : {}}>
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