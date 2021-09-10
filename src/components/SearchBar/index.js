import React from 'react'
import { Wrapper,Content} from './SearchBarStyles'
import SearchIcon from '../../images/search-icon.svg'
import { useState,useEffect,useRef } from 'react'
const SearchBar = ({setSearchTerm}) => {
       const [state,setState]=useState('');
       const intial=useRef(true);
       useEffect(()=>{
           if(intial.current){
               intial.current=false;
               return;
           }
               const timer= setTimeout(()=>{
                   setSearchTerm(state);
            },500);
               return () => clearTimeout(timer);
       },[setSearchTerm,state])
    return (
        <Wrapper>
            <Content>
               <img src={SearchIcon} alt='search icon'/>
               <input type="text" placeholder="Search for Movies"
               onChange={(event)=>setState(event.currentTarget.value)}
               value={state}/>
            </Content>
        </Wrapper>
    )
}

export default SearchBar
