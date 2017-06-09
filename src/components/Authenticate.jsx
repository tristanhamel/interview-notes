import React from 'react';
import PropTypes from 'prop-types';

import { ModalWrapper } from './ModalWrapper';

export const Authenticate = (props) => {
  return (
    <ModalWrapper title="Log in or sign up"
                  hideModal={props.hideModal}>
      <div className="authenticate"> Auth view </div>
    </ModalWrapper>
  );
};
Authenticate.propTypes = {
  hideModal: PropTypes.func
};
