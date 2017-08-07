this.created = new Date().getTime();
this.modified = new Date().getTime();
this.owner = me.id;

const questions = [];
const qLength = this.questions.length;

if(this.questions) {
  const newQuestions = this.questions.map(q => {
    delete q.id;
    return q;
  });
  this.questions = [];
  newQuestions.forEach(q => {
    dpd.questions.post(q, nq =>  {
      nq.type = 'question';
      questions.push(nq);
      this.questions.push(nq.id);

      if(questions.length === qLength) {
        ctx.done(null, [Object.assign({}, this, {questionnaires: [], questions, type: 'group'})]);
      }
    });
  });
}
