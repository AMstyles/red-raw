
//this is the state object, has
const initialState = {
    artists: [],
    albums: [],
    songs: [],
}

const searchReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SEARCH_ARTISTS':
            return {
                ...state,
                artists: action.payload
            }

        case 'SEARCH_ALBUMS':
            return {
                ...state,
                albums: action.payload
            }

        case 'SEARCH_SONGS':
            return {
                ...state,
                songs: action.payload
            }

        default:
            return state;
    }

}



export default searchReducer;