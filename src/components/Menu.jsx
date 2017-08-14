import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setModal } from '../actions/ui.actions';
import { logout } from '../actions/users.actions';

import './menu.scss';

export const MenuView = props =>  (
  <menu className="menu">
    <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header row">
          <div className="col-xs-6">
            <Link to="/" className="navbar-brand">MENU</Link>
          </div>
          <div className="col-xs-6 navbar-auth">
            {!props.user.uid &&
              <button type="button"
                      className="btn btn-primary navbar-btn"
                      onClick={() => props.openModal('AUTHENTICATE')}>
                Sign in
              </button>
            }
            {props.user.name &&
              <div className="navbar-username">
                <div>
                  <span className="glyphicon glyphicon-user"></span>
                  <span className="username">{props.user.name}</span>
                </div>
                <div className="logout">
                  <a onClick={() => props.logout()}>Logout</a>
                </div>
              </div>
            }
          </div>
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
  user: PropTypes.object,
  logout: PropTypes.func
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  openModal: modalId => dispatch(setModal(modalId)),
  logout: () => dispatch(logout())
});

export const Menu = connect(mapStateToProps, mapDispatchToProps)(MenuView);
