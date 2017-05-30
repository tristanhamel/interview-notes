import React from 'react';

import { IGroupReselect } from '../../interfaces';

interface IProps {
  groups: Array<IGroupReselect>,
  setSelectedGroup: Function,
  selectedGroup: IGroupReselect
}

export const GroupsList = (props: IProps) => {
  const isSelected = (id) => props.selectedGroup && props.selectedGroup.id === id;

  return (
    <div>
      <ul>
        {props.groups.map((group, i) => (
          <div key={i}>
            <h3 onClick={() => props.setSelectedGroup(group.id)}>
              {!isSelected(group.id) && <span className="glyphicon glyphicon-folder-close"></span>}
              {isSelected(group.id) && <span className="glyphicon glyphicon-folder-open"></span>}
              &nbsp;
              {group.title}
              &nbsp;
              ({group.questionnairesIds.length})
            </h3>
          </div>
        ))}
      </ul>
    </div>
  );
};
