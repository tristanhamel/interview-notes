import React from 'react';

import { PQuestionnaire, PGroup } from '../../proptypes';

export const FillQuestionnaireView = (props) => {
  return (
    <div className="fill-questionnaire">
      <h3>{props.group.title}</h3>
      <h1>{props.questionnaire.title}</h1>
    </div>
  );
};

FillQuestionnaireView.propTypes = {

};
FillQuestionnaireView.propTypes = {
  questionnaire: PQuestionnaire,
  group: PGroup
};
