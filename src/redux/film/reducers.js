import actions from './actions'

const initialState = {
    films : [],
    currentCategory : undefined,
    categories : [],
    loading: false,
    error:null,
}

export default function filmsReducers(state = initialState, action) {
    switch (action.type) {
        case actions.SET_STATE:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
