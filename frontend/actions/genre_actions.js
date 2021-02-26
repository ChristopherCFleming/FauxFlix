import * as ApiGenreUtil from '../util/genre_api_util';

export const RECEIVE_GENRES = "RECEIVE_GENRES";

const receiveGenres = (genres) => {
  return {  
      type: RECEIVE_GENRES,
      genres
    } 
}

export const allGenres = () => dispatch => {
    return ApiGenreUtil.fetchGenres()
        .then(genres => dispatch(receiveGenres(genres)))
}

// export const allGenres = () => dispatch => {
//     return ApiGenreUtil.allGenres()
//         .then((genres)=>dispatch(receiveGenres(genres)));
// }