// https://medium.com/@david.gilbertson/modals-in-react-f6c3ff9f4701

import React from 'react';
import PropTypes from 'prop-types';

export const ModalWrapper = props => {
  const handleBackgroundClick = e => e.target === e.currentTarget ? props.hideModal() : null;

  return (
    <div onClick={handleBackgroundClick}
         className="modal-container">
      <div className="modal-content panel panel-primary"
           style={{width: props.width, minHeight: props.width}}>
        <div className="panel-heading">
          <h2>{props.title}</h2>
          <button type="button" className="close"
                  aria-label="Close"
                  onClick={props.hideModal}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {props.children}
      </div>
    </div>
  );
};
ModalWrapper.propTypes = {
  // props
  width: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,

  // methods
  hideModal: PropTypes.func
};
ModalWrapper.defaultProps = {
  width: 400
};