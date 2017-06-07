import React from 'react';
import PropTypes from 'prop-types';

import { templateQuestions } from '../../constants/templateQuestions';
import { PGroup } from '../../proptypes';
import { EditText } from '../EditText';
import { AddQuestion } from './AddQuestion';
import { EditQuestion } from './EditQuestion';
import { AddCategory } from './AddCategory';
import { questionCategories } from '../../constants/questionCategories';

export class EditTemplateView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tempCats: []
    };
  }

  addCategory(cat) {
    this.setState({tempCats: [...this.state.tempCats, cat]});
  }

  addQuestion(question, category) {
    const newQuestion = question.cat === 'default' ? Object.assign({}, question, category) :
      question;

    this.props.onAddQuestion(newQuestion, this.props.group.id);
  }

  deleteCategory(cat) {
    this.setState({tempCats: this.state.tempCats.filter(c => c!== cat)});
    this.props.onDeleteCategory(cat, this.props.group.id);
  }

  editGroupProp(prop) {
    this.props.onEditGroupProps(prop, this.props.group.id);
  }

  getAvailableCats() {
    return questionCategories
      .filter(c => this.props.group.categories.indexOf(c) === -1 && this.state.tempCats.indexOf(c) === -1);
  }

  getTempCats() {
    return this.state.tempCats
      .filter(c => this.props.group.categories.indexOf(c) === -1);
  }

  templateQuestions(cat) {
    return templateQuestions
      .filter(q => q.category === cat || q.category === 'default');
  }

  render() {
    return (
      <div className="container">
        <div className="fill-questionnaire panel panel-default">
          <div className="panel-heading">
            <EditText onChange={title => this.editGroupProp({ title })}
                      text={this.props.group.title}
                      textClass="h3">
              <h3>{this.props.group.title}</h3>
            </EditText>

            <EditText onChange={description => this.editQuestionnaireProp({ description })}
                      text={this.props.group.description}
                      long={true}
                      textClass="lead">
            </EditText>
          </div>

          <ul className="categories list-group">
            {this.props.group.categories.map((cat, i) => {
              return (
                <li className="category list-group-item"
                            key={i}>
                  <div className="category-title">
                    <h4>
                      {cat}
                    </h4>
                  </div>
                  <ul className="list-group">
                    {this.props.group.questions.hasOwnProperty(cat) &&
                      this.props.group.questions[cat].map((q, j) => {
                        return <li className="list-group-item"
                                    key={j}>
                          <EditQuestion question={q}
                                        onChange={response => this.props.onEditQuestion(response)}
                                        onDelete={questionId => this.props.onDeleteQuestion(questionId, this.props.group.id)}/>
                        </li>;
                      })}
                    <li className="list-group-item">
                      <AddQuestion templateQuestions={this.templateQuestions(cat)}
                                   onAdd={question => this.props.onAddQuestion(question, this.props.group.id)}/>
                    </li>
                  </ul>
                </li>
              );
            })}
            {this.getTempCats().map((cat, i) => {
              return (
              <li className="category list-group-item"
                  key={i}>
                <div className="category-title">
                  <h4>
                    {cat}
                  </h4>
                </div>
                <ul className="list-group">
                  <li className="list-group-item">
                    <AddQuestion templateQuestions={this.templateQuestions(cat)}
                                 onAdd={question => this.addQuestion(question, cat)}/>
                  </li>
                </ul>
              </li>
              );
            })}

            {!this.getAvailableCats().length ? null :
              <li className="add-category list-group-item">
                <AddCategory categories={this.getAvailableCats()}
                             onAdd={category => this.addCategory(category)}/>
              </li>
            }
          </ul>

        </div>
      </div>
    );
  }
}

EditTemplateView.propTypes = {
  group: PGroup.isRequired,
  onDeleteCategory: PropTypes.func,
  onAddQuestion: PropTypes.func.isRequired,
  onDeleteQuestion: PropTypes.func.isRequired,
  onEditQuestion: PropTypes.func.isRequired,
  onEditGroupProps: PropTypes.func.isRequired
};
