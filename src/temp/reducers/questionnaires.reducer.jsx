const initialState = [
    { id: '1',
        title: 'company1'
    },
    {
        id: '2',
        title: 'company2'
    },
    {
        id: '3',
        title: 'company3'
    }
];
export const questionnaires = (state = initialState, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
};
