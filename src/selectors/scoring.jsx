export function scoring(questionnaires, questions, oldResponses) {
  // assign a score between 0 and 1 to each response if it's set to auto
  const responses = questions
    .reduce((ar, question) => {
      const weightedResponses = oldResponses
        .filter(r => r.questionId === question.id);

      if(question.score === 'auto') {
        const minMax = weightedResponses
          .reduce((obj, r) => ({
            min: (r.value < obj.min || obj.min === null) ? r.value : obj.min,
            max: (r.value > obj.max  || obj.max === null) ? r.value : obj.max,
          }), {min: null, max: null});

        weightedResponses
          .forEach(r => {
            const score = (r.value - minMax.min)/(minMax.max - minMax.min);

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
          .filter(r => q.responsesIds.indexOf(r.id) !== -1),
        score: q.responsesIds
          .map(id => responses.find(r => r.id === id))
          .reduce((total, r) => {
            return total + r.score;
          }, 0)
      }
    ));

  return res;
}
