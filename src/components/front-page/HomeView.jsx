import React from 'react';
import PropTypes from 'prop-types';

import { PGroupReselect } from '../../proptypes';

import { GroupsList } from './GroupsList';
import { GroupView } from './GroupView';

import './home-view.scss';

export const HomeView = props => {
  return (
    <div className="home-view">
      <h2 className="text-center">
        My app is here
      </h2>
      <div className="row">
        <div className="col-sm-3 col-md-2 container">
          <div className="panel panel-default">
            <GroupsList groups={props.groups}
                        setSelectedGroup={props.setSelectedGroup}
                        selectedGroup={props.selectedGroup}>
            </GroupsList>
          </div>
        </div>
        <div className="col-sm-9 col-md-10 container">
          {props.selectedGroup &&
            <GroupView group={props.selectedGroup}
                       onAddQuestionnaire={props.onAddQuestionnaire}
                       onDeleteQuestionnaire={props.onDeleteQuestionnaire}
                       onEditGroupProp={props.onEditGroupProp}
                       onDeleteGroup={props.onDeleteGroup} />
          }
        </div>
      </div>
    </div>
  );
};
HomeView.propTypes = {
  groups: PropTypes.arrayOf(PGroupReselect),
  setSelectedGroup: PropTypes.func,
  selectedGroup: PGroupReselect,
  onAddQuestionnaire: PropTypes.func,
  onDeleteQuestionnaire: PropTypes.func,
  onEditGroupProp: PropTypes.func,
  onDeleteGroup: PropTypes.func,
};
