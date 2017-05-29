import React from 'react';
import { Group } from './Group';
export const GroupsList = (props) => {
    const onClick = (id) => props.setSelectedGroup(id);
    return (<div>
      <ul>
        {props.groups.map((group, i) => <Group group={group} key={i} onClick={onClick} isSelected={props.selectedGroup && props.selectedGroup.id === group.id}>
          </Group>)}
      </ul>
    </div>);
};
