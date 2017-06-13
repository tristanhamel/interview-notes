dpd.questions.get({id: {$in: this.questionsIds}}, function(questions) {
    this.questions = questions;
});
dpd.questionnaires.get({id: {$in: this.questionnairesIds}}, function(questionnaires) {
    this.questionnaires = questionnaires;
});