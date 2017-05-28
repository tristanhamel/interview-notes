import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Front } from './Front';
import { EditQuestionnaire } from './EditQuestionnaire';

export class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Front}></Route>
        <Route path="/edit/:title?" component={EditQuestionnaire}></Route>
      </Switch>
    );
  }
}
