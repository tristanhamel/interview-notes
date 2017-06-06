import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { PGroupReselect } from '../../proptypes';

import { GroupsList } from './GroupsList';
import { Group } from '../group-view/Group';

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
        <Route name="group"
               path={`${props.match.url}:groupId`}
               component={Group} />
        <Route name="default"
               exact
               path={props.match.url}
               render={() => (
                 <h3>Default stuff</h3>
               )}>
        </Route>
      </div>
    </div>
  );
};
HomeView.propTypes = {
  groups: PropTypes.arrayOf(PGroupReselect),
  match: PropTypes.object
};
