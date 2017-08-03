import React from 'react';
import PropTypes from 'prop-types';
import { endPoints } from '../constants/endPoints';

import { ModalWrapper } from './ModalWrapper';

import './authenticate.scss';

export class Authenticate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isProviderFormLoading: false,
      providerWindow: null,
      error: false
    };

    // listens to messages from authProviders popups
    window.addEventListener('message', event => this.onAuth(event), false);
  }

  onAuth(event) {
    console.log(event);
    if(event.data && event.data.source && event.data.source === '@devtools-page') {
      return;
    }

    const newState = {
      isProviderFormLoading: false,
      error: event.data.success !== 'true'
    };
    this.setState(newState);
    this.props.login(event.data);

    if(event.data.success) {
      this.props.hideModal();
    }
  }

  getProviderForm(provider) {
    this.setState({
      isProviderFormLoading: true
    });

    window.open(
      `${endPoints.AUTHENTICATE}/${provider}?redirectURL=http://localhost:8080/after-auth`,
      'authProviderWindow',
      'menubar=no,toolbar=no,location=no,centerscreen,width=350,height=250'
    );
  }

  render() {
    return (
      <ModalWrapper title="Log in or sign up"
                    hideModal={this.props.hideModal}>
        {this.state.error &&
          <div className="authenticate-error">
            Something went wrong. Please try again.
          </div>
        }
        {this.state.isProviderFormLoading ?
          <div>
            Spinner...
          </div> :
          <div className="authenticate-menu">
            <button className="btn btn-lg btn-gh"
                    onClick={() => this.getProviderForm('github')}>
              <span className="glyphicon glyphicon-gh"></span>
              Github
            </button>

            <button className="btn btn-lg btn-gg"
                    onClick={() => this.getProviderForm('google')}>
              <span className="glyphicon glyphicon-gg"></span>
              Google
            </button>
            <button className="btn btn-lg btn-fb"
                    onClick={() => this.getProviderForm('facebook')}>
              <span className="glyphicon glyphicon-fb"></span>
              Facebook
            </button>
          </div>
        }
      </ModalWrapper>
    );
  }

}
Authenticate.propTypes = {
  hideModal: PropTypes.func,
  login: PropTypes.func
};
