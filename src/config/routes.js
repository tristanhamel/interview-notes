import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Main } from '../components/Main';
import { EditQuestionnaire } from '../components/EditQuestionnaire';

export const routes = (
  <Switch>
    <Route path="/" component={Main}></Route>
    <Route path="/edit-questionnaire" component={EditQuestionnaire}></Route>
  </Switch>
);
