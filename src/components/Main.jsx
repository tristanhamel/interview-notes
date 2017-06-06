import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './front-page/Home';
import { FillQuestionnaire } from './fill-questionnaire/FillQuestionnaire';
import { EditTemplate } from './edit-template/EditTemplate';

export class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route name="questionnaire"
               path="/questionnaire/:groupId/:questionnaireId"
               component={FillQuestionnaire} />
        <Route name="edit-template"
               path="/edit-template/:groupId"
               component={EditTemplate} />
        <Route name="main"
               path="/"
               component={Home} />
      </Switch>
    );
  }
}
