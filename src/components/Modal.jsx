import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { resetModal } from '../actions/ui.actions';
import { login } from '../actions/users.actions';
import { Authenticate } from './Authenticate.jsx';
import { ConfirmDelete } from './ConfirmDelete.jsx';

import './modal.scss';

const ModalView = props => {
  switch (props.currentModal) {
    case 'AUTHENTICATE':
      return <Authenticate {...props}/>;

    case 'CONFIRM_DELETE':
      return <ConfirmDelete {...props}/>;
    default:
      return null;
  }
};
ModalView.propTypes = {
  currentModal: PropTypes.string
};

const mapStateToProps = (state) => ({
  currentModal: state.ui.currentModal,
  message: state.ui.modalData && state.ui.modalData.message ? state.ui.modalData.message : null,
  confirmDelete: state.ui.modalData && state.ui.modalData.confirmDelete ? state.ui.modalData.confirmDelete : null
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(resetModal()),
  login: provider => dispatch(login(provider))
});


export const Modal = connect(mapStateToProps, mapDispatchToProps)(ModalView);
