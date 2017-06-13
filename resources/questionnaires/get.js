dpd.responses.get({id: {$in: this.responsesIds}}, function(responses) {
    this.responses = responses;
});