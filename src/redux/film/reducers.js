import actions from './actions'
import sentence from "../../constante/Constante";

const initialState = {
    films : [],
    filterdFilm : [],
    categories : [],
    currentCategory : undefined,
    currentPagination : 1,
    pageSize : sentence.pagination.defaultSize,
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
