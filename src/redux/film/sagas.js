import actions from "./actions";
import {all, takeEvery,put,call,select,takeLatest} from "redux-saga/effects"
import * as filmService from "../../services/film.service"
import {failure, requestLoading, succes} from "../../services/utils/function.service";
import sentence from "../../constante/Constante";
import * as filmHelper from "../../utils/film.utils"

export function* GET_FILMS() {
    console.log("getfilms in saga")
    yield put(requestLoading(actions.SET_STATE,true))
    const response = yield call(filmService.getFilms)
    if(response) {
        const listFilm = filmHelper.updateListWithLikes(response)
        yield put(succes({films: listFilm},actions.SET_STATE))
    }
    else yield put(failure({error : sentence.error}))
    yield put(requestLoading(actions.SET_STATE,false))
}

export function* SET_LIKES({payload}){
    const {filmId,like} = payload
    let {films} = yield select(state => state.films);
    let newFilm = filmHelper.updateFilmWithLike(films,filmId,like)
    yield put(succes({films : newFilm},actions.SET_STATE))

}

export default function* rootSaga() {
   yield all([
       takeEvery(actions.GET_FILMS, GET_FILMS),
       takeLatest(actions.SET_LIKE, SET_LIKES)
   ])
}