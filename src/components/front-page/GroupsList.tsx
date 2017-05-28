import React from 'react';

import { Group } from './Group';

export const GroupsList = (props) => {
  return (
    <div>
      <ul>
        {props.groups.map((group, i) => <Group group={group} key={i}></Group>)}
      </ul>
    </div>
  );
};
