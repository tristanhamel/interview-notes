import React from 'react';

export class NewQuestionnaire extends React.Component {
  constructor(props) {
    super(props);

    this.isEditing = false;
  }

  render() {
    if(this.isEditing) {
      return (
      <form>
        <input type="text"/>
        <button type="submit" onClick={data => this.props.onAddQuestionnaire(data)}>Add</button>
        <button type="cancel">Add</button>
      </form>);
    }

    return (
      <span>
        <span>Add a new questionnaire</span>
            &nbsp;
        <span className="glyphicon glyphicon-plus"></span>
      </span>
    );
  }
}