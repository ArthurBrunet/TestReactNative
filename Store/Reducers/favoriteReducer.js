
const initialState = { favoritesFilm: [] }

function toggleFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item === action.value)
        // Le film n'est pas dans les films favoris, on l'ajoute à la liste
        if(favoriteFilmIndex == -1){
            nextState = {
                      ...state,
                      favoritesFilm: [...state.favoritesFilm, action.value]
                    }
        }
      return nextState || state
  default:
    return state
  }
}

export default toggleFavorite
