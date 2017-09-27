import React from 'react';
import PropTypes from 'prop-types';

import { ModalWrapper } from './ModalWrapper';

import './ConfirmDelete.scss';

export class ConfirmDelete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return ( 
      <ModalWrapper title="Confirm"
                    hideModal={this.props.hideModal}>
        <div>
          {this.props.message}
        </div>
        <div className="btn-row">
          <button className="btn btn-success"
                  onClick={() => {
                    this.props.confirmDelete();
                    this.props.hideModal();
                  }}>
            Yes
          </button>
          <button className="btn btn-danger"
                  onClick={() => this.props.hideModal()}>
            No
          </button>
        </div>
      </ModalWrapper>
    );
  }
}
ConfirmDelete.propTypes = {
  hideModal: PropTypes.func,
  confirmDelete: PropTypes.func,
  message: PropTypes.string
};
