
import {useState,useEffect} from 'react'
import { isPersistedState } from '../helpers'


import API from '../API'
 
export const useMovieFetch = (movieId) => {
    const [state,setState]=useState()
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(false)


     
     useEffect(()=>{
        const fetchData =async()=>{
            try{
              setLoading(true);
              setError(false);
              const movie= await API.fetchMovie(movieId);
              const credits= await API.fetchCredits(movieId);
    
              //get directors
              const directors = credits.crew.filter(member=>member.job==="Director");
    
              setState({...movie,actors:credits.crew,directors,credits})
              setLoading(false);
              
              
              
            }catch(error){
                  setError(true);
            }
           
           };

           const sessionState=isPersistedState(movieId);
           if(sessionState){
              setState(sessionState);
              setLoading(false);
              return;
           }
        
        fetchData()  
     },[movieId]) 

useEffect(()=>{
   sessionStorage.setItem(movieId,JSON.stringify(state));

},[movieId,state])

     return {state,loading,error}
   
    
}
  
    




