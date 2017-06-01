import React from 'react';
import PropTypes from 'prop-types';

import { PGroupReselect } from '../../proptypes';

import { GroupsList } from './GroupsList';
import { GroupView } from './GroupView';

export const HomeView = props => {
  return (
    <div>
      <h2 className="text-center">
        My app is here
      </h2>
      <div className="row">
        <div className="col-md-4">
          <GroupsList groups={props.groups}
                      setSelectedGroup={props.setSelectedGroup}
                      selectedGroup={props.selectedGroup}>
          </GroupsList>
        </div>
        <div className="col-md-8">
          {props.selectedGroup && <GroupView group={props.selectedGroup}
                                             onAddQuestionnaire={props.onAddQuestionnaire}
                                             onDeleteQuestionnaire={props.onDeleteQuestionnaire}
                                             onEditGroupProp={props.onEditGroupProp}
                                             onDeleteGroup={props.onDeleteGroup}>
                                  </GroupView>}
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
