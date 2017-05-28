import React from 'react';
// import PropTypes from 'prop-types';
import { GroupsList } from './GroupsList';
export const HomeView = (props) => {
    return (<div>
      <h2 className="text-center">
        My app is here
      </h2>
      <div className="row">
        <GroupsList groups={props.groups}></GroupsList>
      </div>
    </div>);
};
