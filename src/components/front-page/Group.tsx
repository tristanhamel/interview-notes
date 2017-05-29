import React from 'react';
import { IGroupReselect } from '../../interfaces';

interface IProps {
  group: IGroupReselect,
  onClick: Function,
  isSelected: Boolean
}

export const Group = (props: IProps) => {
  const onClick = () => props.onClick(props.group.id);

  return (
    <div>
      <h3 onClick={onClick}>
        {!props.isSelected && <span className="glyphicon glyphicon-folder-close"></span>}
        {props.isSelected && <span className="glyphicon glyphicon-folder-open"></span>}
        {props.group.title}
      </h3>
      <ul>
        {props.group.questionnaires.map((q, i) => (
          <li key={i}>
            {q.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
