
import * as React from 'react';

interface MyProps {
  onAddQuestionnaire: Function
}
interface MyState {}

export class NewQuestionnaire extends React.Component<MyProps, MyState> {
  isEditing: boolean;

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