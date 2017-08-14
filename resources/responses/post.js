this.created = new Date().getTime();
this.modified = new Date().getTime();

const questionnaireId = this.questionnaire;
delete this.questionnaire;

dpd.questionnaires.put(questionnaireId, {responses: {$push: this.id}});

