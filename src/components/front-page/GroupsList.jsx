import React from 'react';
import PropTypes from 'prop-types';
import { PGroup } from '../../proptypes';

export const GroupsList = (props) => {
  const isSelected = (id) => props.selectedGroup && props.selectedGroup.id === id;

  return (
    <div>
      <ul>
        {props.groups.map((group, i) => (
          <div key={i}>
            <div onClick={() => props.setSelectedGroup(group.id)}>
              {!isSelected(group.id) && <span className="glyphicon glyphicon-folder-close"></span>}
              {isSelected(group.id) && <span className="glyphicon glyphicon-folder-open"></span>}
              &nbsp;
              {group.title}
              &nbsp;
              ({group.questionnairesIds.length})
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

GroupsList.propTypes = {
  groups: PropTypes.arrayOf(PGroup)
};
