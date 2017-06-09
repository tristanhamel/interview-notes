import React from 'react';
import PropTypes from 'prop-types';

import { ModalWrapper } from './ModalWrapper';

import './authenticate.scss';

export const Authenticate = (props) => {
  const login = provider => {
    props.hideModal();
    props.login(provider);
  }

  return (
    <ModalWrapper title="Log in or sign up"
                  hideModal={props.hideModal}>
      <div className="authenticate">
        <button className="btn btn-lg btn-gh"
                onClick={() => login('github')}>
          <span className="glyphicon glyphicon-gh"></span>
          Github
        </button>

        <button className="btn btn-lg btn-gg"
                onClick={() => login('google')}>
          <span className="glyphicon glyphicon-gg"></span>
          Google
        </button>
        <button className="btn btn-lg btn-fb"
                onClick={() => login('facebook')}>
          <span className="glyphicon glyphicon-fb"></span>
          Facebook
        </button>
      </div>
    </ModalWrapper>
  );
};
Authenticate.propTypes = {
  hideModal: PropTypes.func,
  login: PropTypes.func
};
