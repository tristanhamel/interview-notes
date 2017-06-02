import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Front } from './Front';
import { FillQuestionnaire } from './fill-questionnaire/FillQuestionnaire';
import { EditTemplate } from './edit-template/EditTemplate';

export class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route name="main"
               exact
               path="/"
               component={Front} />
        <Route name="questionnaire"
               path="/questionnaire/:groupId/:questionnaireId"
               component={FillQuestionnaire} />
        <Route name="edit-template"
               path="/edit-template/:groupId"
               component={EditTemplate} />
      </Switch>
    );
  }
}
