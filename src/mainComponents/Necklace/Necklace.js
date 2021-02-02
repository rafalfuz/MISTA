import React from 'react';
import './Necklace.scss'
import necklace from '../../images/necklace.png'

const Necklace = () => {
    return ( 
        <div className='necklace'>
            <img className='necklace__image' src={necklace} alt='wisiorek.png'></img>
        </div>
     );
}
 
export default Necklace;