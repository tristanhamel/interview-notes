export function scoring(questionnaires, questions, oldResponses) {
  // assign a score between 0 and 1 to each response if it's set to auto
  const responses = questions
    .reduce((ar, question) => {
      const weightedResponses = oldResponses
        .filter(r => r.question === question.id);

      if(question.score === 'auto') {
        const minMax = weightedResponses
          .reduce((obj, r) => {
            // select responses have an object as value
            const value = typeof r.value === 'number' ? r.value : r.value.value;

            return {
              min: (value < obj.min || obj.min === null) ? value : obj.min,
              max: (value > obj.max  || obj.max === null) ? value : obj.max
            };
          }, {min: null, max: null});

        weightedResponses
          .forEach(r => {
            const value = typeof r.value === 'number' ? r.value : r.value.value;

            const score = (value - minMax.min)/(minMax.max - minMax.min);

            // if all scores are 1 score is NaN
            r.score = isNaN(score) ? 1 : score;
          });
      }

      return [...ar, ...weightedResponses];
    }, []);

  // assign a total score to questionnaires
  const res = questionnaires
    .map(q =>  Object.assign(
      {},
      q,
      {
        responses: responses
          .filter(r => q.responses.indexOf(r.id) !== -1),
        score: q.responses
          .reduce((total, r) => {
            return total + r.score;
          }, 0)
      }
    ));

  return res;
}
