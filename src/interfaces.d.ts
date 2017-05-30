export interface IQuestion {
  id: string,
  type: string,
  label: string,
  score: -1 | 0 | 1,
}

export interface ITextQuestion extends  IQuestion {
  placeholder: string
}

export interface IYesNoQuestion extends IQuestion {
  options: Array<{label: string, value: any}>
}

export interface IResponse {
  questionId: string
  value: string | boolean
}

export interface ITextResponse extends  IQuestion {
  value: string
}

export interface IYesNoResponse extends IQuestion {
  value: boolean
}

export interface ITemplate {
  questions: Array<IQuestion>
}

export interface IQuestionnaire {
  id: string,
  created_at: Date,
  last_modified: Date,
  title: string,
  responses: Array<IResponse>
}

export interface IGroup {
  id: string,
  created_at: Date,
  last_modified: Date,
  title: string,
  description: string,
  questionnairesIds: Array<string>
  template: ITemplate
}

export interface IGroupReselect extends IGroup {
  questionnaires: Array<IQuestionnaire>
}

export interface IState {
  selectedGroup: string,
  created_at: Date,
  last_modified: Date,
  edited: string,
  groups: Array<IGroup>,
  questionnaires: Array<IQuestionnaire>
}