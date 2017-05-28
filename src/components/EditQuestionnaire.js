import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class EditQuestionnaireComponent extends React.Component {
  constructor(props) {
    super(props);

    // // take the title from url param or set default
    // this.state = {
    //   title: this.props.match.params.title || 'Title',
    //   description: 'Description'
    // } ;
  }

  render () {
    return (
      <edit-questionnaire>
        <h2 className="text-center">
          Editing view
        </h2>
        <div className="container">
          <h3>{this.state.title}</h3>
          <p>{this.state.description}</p>
        </div>
      </edit-questionnaire>
    );
  }
}
EditQuestionnaireComponent.propTypes = {
  match: PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
  title: state.edited.title,
  description: state.edited.description
});

export const EditQuestionaire = connect(mapStateToProps)(EditQuestionnaireComponent);
