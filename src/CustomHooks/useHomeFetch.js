import {useState,useEffect} from 'react'
import API from '../API'
import { isPersistedState } from '../helpers'
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
  
     
     
      setState(prev=>({...movies, results:page>1 ? [...prev.results,...movies.results]:[...movies.results]}));
       
    }catch(error){
            setError(true);
        }
        setLoading(false);
       
    }
    
    
    useEffect(()=>{
      if(!searchTerm){
        const sessionState=isPersistedState('homeState');

        if(sessionState){
          setState(sessionState);
          return;
        }
      }

      setState(intitalState);
        fetchMovies(1,searchTerm)
    },[searchTerm])

    useEffect(()=>{
      if(!loadMore) return;
        fetchMovies(state.page+1,searchTerm)
        setLoadMore(false);
    },[searchTerm,state.page,loadMore])

//Wrtie to seesion storage
useEffect(()=>{
  if(!searchTerm) sessionStorage.setItem('homeState',JSON.stringify(state));
  
},[searchTerm,state])
    
  return {state,loading,error,searchTerm,setSearchTerm,setLoadMore}
}


