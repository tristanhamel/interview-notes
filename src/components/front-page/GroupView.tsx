import React from 'react';

export const GroupView = (props) => {
  return (
    <div>
      <h2>{props.group.title}</h2>
      <button className="btn btn-default">
        Edit template
      </button>
    </div>
  );
};
