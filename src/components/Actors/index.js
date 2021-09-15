import React from 'react'
import {Wrapper,Image} from './ActorStyles'
const Actors = ({name,character,ImageUrl}) => (
    <Wrapper>
        <Image src={ImageUrl}/>
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
)

export default Actors
