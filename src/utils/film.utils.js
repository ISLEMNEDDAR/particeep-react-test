export const updateListWithLikes = (listFilm)=>{
    return listFilm.map(film => ({...film,like : null}))
}

export const updateFilmWithLike = (films,filmId,like)=>{
    return films.map(film => {
        if (film.id === filmId) {
            // if like = true && film.like = null => incerment likes
            // if like = true && film.like = false => increment likes and decrement dislkes
            // if like = false && film.like = null => incerment dislike
            // if like = false && film.like = true => increment dislike and decrement likes
            // if like = null && film.like = true => descrement likes
            // if like = null && film.dislike = false => descriment dislike
            // eslint-disable-next-line default-case
            switch(like){
                case true :
                    film.likes++
                    if(film.like === false) film.dislikes--
                    break
                case false :
                    film.dislikes++
                    if(film.like === true) film.likes--
                    break
                case null:
                    if(film.like === true) film.likes--
                    if (film.like === false) film.dislikes--
                    break
            }
            return { ...film,like : like}
        }
        else return {...film}
    })
}

export const getCategorie = (listFilm)=>{
    let categorys = [];
    // eslint-disable-next-line array-callback-return
    listFilm.forEach(film => {
        if(!categorys.includes(film.category)) categorys.push(film.category)
    })
    console.log(categorys)
    return categorys
}