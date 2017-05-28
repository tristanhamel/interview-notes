const initialState = [
    {
        title: 'Group1',
        description: 'in August',
        questionnaires: ['1', '2']
    },
    {
        title: 'Group2',
        description: 'in September',
        questionnaires: ['3']
    }
];
export const groups = (state = initialState, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
};
