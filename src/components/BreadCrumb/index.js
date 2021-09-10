import React from 'react'
import {Link} from 'react-router-dom'
import {Wrapper,Content} from './BreadCrumbSyles'
const BreadCrumb = ({movieTitle}) => {
    return (
        <Wrapper>
            <Content>
               <Link to='/' style={{textDecoration: 'none'}}>
                 <span>Home</span>
               </Link>
               <span>|</span>
               <span>{movieTitle}</span>
            </Content>
        </Wrapper>            
        
    )
}
export default  BreadCrumb