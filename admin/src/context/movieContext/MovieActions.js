export const getMoviesStart = () => ({
    type: "GET_MOVIES_START",
});
export const getMoviesSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies,
});
export const getMoviesFailure = () => ({
    type: "GET_MOVIES_FAILURE",
});
export const deleteMovieStart = () => ({
    type: "DELETE_MOVIES_START",
});
export const deleteMovieSuccess = (id) => ({
    type: "DELETE_MOVIES_SUCCESS",
    payload: id,
});
export const deleteMovieFailure = () => ({
    type: "DELETE_MOVIES_FAILURE",
});
export const createMovieStart = () => ({
    type: "CREATE_MOVIES_START",
});
export const createMovieSuccess = (movie) => ({
    type: "CREATE_MOVIES_SUCCESS",
    payload: movie,
});
export const createMovieFailure = () => ({
    type: "CREATE_MOVIES_FAILURE",
});
export const updateMovieStart = () => ({
    type: "UPDATE_MOVIES_START",
});
export const updateMovieSuccess = (movie) => ({
    type: "UPDATE_MOVIES_SUCCESS",
    payload: movie,
});
export const updateMovieFailure = () => ({
    type: "UPDATE_MOVIES_FAILURE",
});