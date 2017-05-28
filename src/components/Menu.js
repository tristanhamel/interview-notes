import React from 'react';
import { Link } from 'react-router-dom';

export class Menu extends React.Component {
  render() {
    return (
      <menu>
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">MENU</Link>
            </div>

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/edit">
                    New Questionnaire
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </menu>
    );
  }
}
