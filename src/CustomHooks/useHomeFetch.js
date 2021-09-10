import {useState,useEffect} from 'react'
import API from '../API'
const intitalState={
    page:0,
    results:[],
    total_pages:0,
    total_results:0
}

export const useHomeFetch = () => {
    const [searchTerm,setSearchTerm]=useState('');
    const [state,setState]=useState(intitalState);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    const [loadMore,setLoadMore]=useState(false);
    console.log(searchTerm)

    
    const fetchMovies=async (page,searchTerm="")=>{
        try{
      setError(false);
      setLoading(true);
      const movies= await API.fetchMovies(searchTerm,page);
  
     
     
      setState(prev=>({...movies,results:page>1 ? [...prev.results,...movies.results]:[...movies.results]}));
       
    }catch(error){
            setError(true);
        }
        setLoading(false);
       
    }
    
    
    useEffect(()=>{
      setState(intitalState);
        fetchMovies(1,searchTerm)
    },[searchTerm])

    useEffect(()=>{
      if(!loadMore) return;
        fetchMovies(state.page+1,searchTerm)
        setLoadMore(false);
    },[searchTerm,state.page,loadMore])


    
  return {state,loading,error,searchTerm,setSearchTerm,setLoadMore}
}


