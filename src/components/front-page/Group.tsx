import React from 'react';

export const Group = (props) => {
  return (
    <div>
      <h3>{props.group.title}</h3>
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
