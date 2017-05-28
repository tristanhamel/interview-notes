export interface IQuestionnaire {
  id: string,
  title: string
}

export interface IGroup {
  id: string,
  title: string,
  description: string,
  questionnaires: Array<string>
}

export interface IGroupReselect {
  id: string,
  title: string,
  description: string,
  questionnaires: Array<IQuestionnaire>
}