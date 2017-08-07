import React from 'react';
import PropTypes from 'prop-types';
import { PGroup } from '../../proptypes';
import { Link } from 'react-router-dom';

export const GroupsList = (props) => {
  // const isSelected = (id) => props.selectedGroup && props.selectedGroup.id === id;

  return (
    <ul className="list-group">
      {props.groups.map((group, i) => (
        <li key={i} className="list-group-item">
          <Link to={`/${group.id}`}>
            {/*{!isSelected(group.id) && <span className="glyphicon glyphicon-folder-close"></span>}*/}
            {/*{isSelected(group.id) && <span className="glyphicon glyphicon-folder-open"></span>}*/}
            &nbsp;
            {group.title}
            &nbsp;
            ({group.questionnaires.length})
          </Link>
        </li>
      ))}
      <li className="list-group-item">
        <Link to="/new-group">
          Add group &nbsp;<span className="glyphicon glyphicon-plus"></span>
        </Link>
      </li>
    </ul>
  );
};

GroupsList.propTypes = {
  groups: PropTypes.arrayOf(PGroup)
};
