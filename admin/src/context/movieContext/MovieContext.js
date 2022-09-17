import MovieReducer from "./MovieReducer";
import { createContext, useReducer } from "react"
import { useEffect } from "react";

const INITIAL_STATE = {
    movies: [],
    isFetching: false,
    error: false,
};

const MovieContext = createContext(INITIAL_STATE);

export const MovieContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    return (
        <MovieContext.Provider value={
            {
                movies: state.movies,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }
        }>
            {children}
        </MovieContext.Provider>
    )

};

export default MovieContext;