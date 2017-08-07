dpd.responses.get({id: {$in: this.responses}}, function(responses) {
  this.responses = responses;
});
this.type = 'questionnaire';