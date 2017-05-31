import React from 'react';

export class NewQuestionnaire extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      newTitle: ''
    };
  }

  onAdd(e) {
    if(!this.state.newTitle.length) {
      return;
    }

    this.props.onAddQuestionnaire(this.state.newTitle);
    e.preventDefault();
    this.reset();
  }

  onChange(title) {
    this.setState({newTitle: title});
  }

  render() {
    if(this.state.isEditing) {
      return (
      <form onSubmit={e => this.onAdd(e)}>
        <input type="text"
               value={this.state.newTitle}
               onChange={e => this.onChange(e.target.value)}/>
        <button type="submit">Add</button>
        <button type="cancel" onClick={() => this.reset()}>Cancel</button>
      </form>);
    }

    return (
      <span onClick={() => this.setState({isEditing: true})}>
        <span>Add a new questionnaire</span>
            &nbsp;
        <span className="glyphicon glyphicon-plus"></span>
      </span>
    );
  }

  reset() {
    this.setState({
      isEditing: false,
      newTitle: ''
    });
  }
}
