import React from "react";

import {IMAGE_BASE_URL,POSTER_SIZE} from '../config'

import Grid from './Grid/index';

import Spinner from './Spinner/index';
import { useMovieFetch } from '../CustomHooks/useMovieFetch'
import {useParams} from 'react-router-dom'
import BreadCrumb from './BreadCrumb/index'
const Movie=()=>{
    const {movieId}=useParams()
    const {state:movie,loading,error}=useMovieFetch(movieId)
    
    console.log(movie)
 if(loading) return <Spinner/>
 if(error) return <div>Something Went Wrong....</div>
return <>
    <BreadCrumb movieTitle={movie.original_title} />
    </>
}

export default Movie;