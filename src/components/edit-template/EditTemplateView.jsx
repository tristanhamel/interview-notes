import React from 'react';
import PropTypes from 'prop-types';

import { PQuestion, PGroup } from '../../proptypes';
import { EditText } from '../EditText';
import { AddQuestion } from './AddQuestion';
import { EditQuestion } from './EditQuestion';
import { AddCategory } from './AddCategory';
import { questionCategories } from '../../constants/questionCategories';

export class EditTemplateView extends React.Component {
  constructor(props) {
    super(props);
  }

  editGroupProp(prop) {
    this.props.onEditGroupProps(prop, this.props.group.id);
  }

  getAvailableCats() {
    return questionCategories.filter(c => this.props.group.categories.indexOf(c) === -1);
  }

  render() {
    return (
      <div className="fill-questionnaire container">
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

        <div className="categories">
          {this.props.group.categories.map((cat, i) => {
            const templateQuestions = this.props.templateQuestions
                .filter(q => q.category === cat);

            return <div className="category"
                        key={i}>
              <h4>
                {cat}
              </h4>
              {this.props.group.questions.hasOwnProperty(cat) &&
                <div className="questions">
                  {this.props.group.questions[cat].map((q, j) => {
                    return <EditQuestion question={q}
                                         key={j}
                                         onChange={response => this.props.onEditQuestion(response)}
                                         onDelete={questionId => this.props.onDeleteQuestion(questionId, this.props.group.id)}/>;
                  })}
                </div>
              }
              <div>
                <AddQuestion templateQuestions={templateQuestions}
                             onAdd={question => this.props.onAddQuestion(question, this.props.group.id)}/>
              </div>
            </div>;
          })}

          {!this.getAvailableCats().length ? null :
            <div className="add-category">
              <AddCategory categories={this.getAvailableCats()}
                           onAdd={category => this.props.onAddCategory(category, this.props.group.id)}/>
            </div>
          }
        </div>
      </div>

    );
  }
}

EditTemplateView.propTypes = {
  templateQuestions: PropTypes.arrayOf(PQuestion).isRequired,
  group: PGroup.isRequired,
  onAddCategory: PropTypes.func,
  onDeleteCategory: PropTypes.func,
  onAddQuestion: PropTypes.func.isRequired,
  onDeleteQuestion: PropTypes.func.isRequired,
  onEditQuestion: PropTypes.func.isRequired,
  onEditGroupProps: PropTypes.func.isRequired
};
