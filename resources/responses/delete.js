dpd.questionnaires.get({responses: {$all: this.id}}, q => {
  dpd.put(q.id, {responses: q.responses.filter(r => r.id !== this.id)});
});