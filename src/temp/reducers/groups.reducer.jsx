const initialState = [
    {
        id: '1',
        title: 'Group1',
        description: 'in August',
        questionnaires: ['1', '2']
    },
    {
        id: '2',
        title: 'Group2',
        description: 'in September',
        questionnaires: ['3']
    }
];
export const groups = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
