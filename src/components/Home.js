import React from 'react'
import { POSTER_SIZE,BACKDROP_SIZE,IMAGE_BASE_URL } from '../config'
import NoImage from '../images/no_image.jpg'
import HeroImage from './HeroImage'
import { useHomeFetch } from '../CustomHooks/useHomeFetch'
import Grid from './Grid'
import Thumbnail from './Thumbnail'
import Spinner from './Spinner/index'
import SearchBar from './SearchBar/index'
import Button from './Button/index'



const Home = () => {
    const {state,loading,error,searchTerm,setSearchTerm,setLoadMore}=useHomeFetch();
    
    console.log(state);
    
    
    if(error)return <div>Something went Wrong...</div>

    return (
        <>{
            !searchTerm &&
         state.results[0] ?
            <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}/>
            :null
        
    }
    <SearchBar setSearchTerm={setSearchTerm}/> 
    <Grid header={searchTerm ?'Search Result':'Popular Movies'}>
        {state.results.map(movie=>(
            <Thumbnail key={movie.id}
            movieId={movie.id}
            clickable
            image={movie.poster_path
                ? IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path
                :NoImage}
            />
        ))}

    </Grid>
    {loading&&<Spinner/>}
    {state.page<state.total_pages && !loading && (
        <Button text="Load More" callback={()=>setLoadMore(true)}/>    
    )}
       </>
    )
}

export default Home
