import React from 'react';

import { Group } from './Group';
import { IGroupReselect } from '../../interfaces';

interface IProps {
  groups: Array<IGroupReselect>,
  setSelectedGroup: Function,
  selectedGroup: IGroupReselect
}

export const GroupsList = (props: IProps) => {
  const onClick = (id) => props.setSelectedGroup(id);

  return (
    <div>
      <ul>
        {props.groups.map((group, i) =>
          <Group group={group}
                 key={i}
                 onClick={onClick}
                 isSelected={props.selectedGroup && props.selectedGroup.id === group.id}>
          </Group>)}
      </ul>
    </div>
  );
};
