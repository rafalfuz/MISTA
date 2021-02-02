import React from 'react';
import './Author.scss'

const Author = () => {
    return ( 
        <div className='author'>
        <div className='author__creator'>© 2021 Projekt i wykonanie dla MI.STA sp. z o.o -- Rafał Fuz</div>
        <a className='author__mail' href='mailto: rafalfuz@gmail.com'>Kontakt: rafalfuz@gmail.com</a>
        </div>
     );
}
 
export default Author;