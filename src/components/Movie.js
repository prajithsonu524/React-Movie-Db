import React from "react";

import {IMAGE_BASE_URL,POSTER_SIZE} from '../config'

import Grid from './Grid/index';
import MovieInfo from './MovieInfo/index';

import Spinner from './Spinner/index';
import { useMovieFetch } from '../CustomHooks/useMovieFetch'
import {useParams} from 'react-router-dom'
import BreadCrumb from './BreadCrumb/index'
import MovieInfoBar from './MovieInfoBar/index'

import NoImage from '../images/no_image.jpg'

import Actors from './Actors/index';


const Movie=()=>{
    const {movieId}=useParams()
    const {state:movie,loading,error,credits}=useMovieFetch(movieId)
    
    console.log(movie)
    console.log(credits)
 if(loading) return <Spinner/>
 if(error) return <div>Something Went Wrong....</div>
return <>
    <BreadCrumb movieTitle={movie.original_title} />
    <MovieInfo movie={movie}/>
    <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
    <Grid header='Cast'>
       {movie.credits.cast.map(cast =>(
           <Actors 
           key={cast.credit_id}
           name={cast.name}
           character={cast.character}
           ImageUrl={cast.profile_path?`${IMAGE_BASE_URL}${POSTER_SIZE}${cast.profile_path}`:NoImage}
           />
       ))}
    </Grid>

    </>
}

export default Movie;