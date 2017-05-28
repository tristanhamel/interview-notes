import * as actions from '../constants/ActionTypes';
export const initialState = {
    title: 'Title',
    description: 'Description'
};
export const edited = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.EDITED_EDIT_TITLE:
            return Object.assign({}, state, { title: payload });
        case actions.EDITED_EDIT_DESCRIPTION:
            return Object.assign({}, state, { description: payload });
        case actions.EDITED_RESET:
            return initialState;
        default:
            return state;
    }
};
