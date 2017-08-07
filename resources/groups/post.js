this.created = new Date().getTime();
this.modified = new Date().getTime();

this.questions.forEach(q => {
  dpd.questions.post(q, nq =>  {
      this.questionsIds = [...this.questionsIds, nq.id];
    });
});

this.questionnaires.forEach(q => {
  dpd.questionnaires.post(q, nq =>  {
      this.questionnaires = [...this.questionnaires, nq.id];
    });
});
