import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setModal } from '../actions/ui.actions';

export const MenuView = props =>  (
  <menu>
    <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">MENU</Link>
          <button type="button"
                  className="btn btn-primary navbar-btn"
                  onClick={() => props.openModal('AUTHENTICATE')}>
            Sign in
          </button>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
          </ul>
        </div>
      </div>
    </nav>
  </menu>
);

MenuView.propTypes = {
  openModal: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  openModal: modalId => dispatch(setModal(modalId))
});


export const Menu = connect(null, mapDispatchToProps)(MenuView);
