import React from 'react';
import { Image } from './ThumbStyles';
import {Link} from 'react-router-dom';

const Thumbnail = ({clickable,image,movieId}) => {
    return (
        <div>{clickable?(
            <Link to={`/${movieId}`}>
            <Image src={image} alt='No-Thumb'/>
            
            </Link>):(
                <Image src={image} alt='No-Thumb'/>
            )
}
        </div>
       
    )
}

export default Thumbnail
