import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import { PGroup } from '../../proptypes';

import { GroupsList } from './GroupsList';
import { Group } from '../group-view/Group';
import { AddGroup } from '../add-group/AddGroup';

import './home-view.scss';

export const HomeView = props => {
  return (
    <div className="home-view">
      <h2 className="text-center">
        My app is here
      </h2>
      <div className="col-sm-3 col-md-2 container">
        <div className="panel panel-default">
          <GroupsList groups={props.groups}
                      selectedGroup="">
          </GroupsList>
        </div>
      </div>
      <div className="col-sm-9 col-md-10 container">
        <Switch>
          <Route name="add-group"
                 path={`${props.match.url}new-group`}
                 exact
                 component={AddGroup} />
          <Route name="group"
                 path={`${props.match.url}:groupId`}
                 exact
                 component={Group} />
          <Route name="default"
                 exact
                 path={props.match.url}
                 render={() => (
                   <h3>Default stuff</h3>
                 )}>
          </Route>
        </Switch>
      </div>
    </div>
  );
};
HomeView.propTypes = {
  groups: PropTypes.arrayOf(PGroup),
  match: PropTypes.object
};
