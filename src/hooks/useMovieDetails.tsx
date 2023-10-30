import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MovieFull } from '../interfaces/movieInterface';
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";

interface MovieDetails{
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];

}

//customHook -> sirve para manejo de estados
export const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async () =>{
        // const resp = await movieDB.get<MovieFull>(`/${ movieId }`); //Regresa una Promise
        
        const movieDetailsPromise = movieDB.get<MovieFull>(`/${ movieId }`); 
        const castPromise = movieDB.get<CreditsResponse>(`/${ movieId }/credits`);

        //peticiones de manera simultanea
        const [movieDetailsResp, castPromiseResp] = await Promise.all([ movieDetailsPromise, castPromise ]);
        // console.log(resp.data.overview);

        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails();
    }, [])
    
    return {
        ...state
    }

}
