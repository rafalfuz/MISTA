import React from 'react';
import './Address.scss'

const Address = () => {
    return ( 
        <address className='address'>
            <div className='address__title'>Dane kontaktowe</div>
            <div className='address__name'>"MI.STA" Spółka z o.o.</div>
            <div className='address__street'>Koszelówka 5, 09-520 Łąck</div>
            <div className='address__number'><a className='address__number__call' href='tel:+48242628615'>Tel. 024 262-86-15</a></div>
            <div className='address__number'><a className='address__number__call' href='tel:+48242771830'>Tel./Fax 024 277-18-30</a></div>
            <div className='address__mail'><a className='address__mail__send' href='mailto:poczta@mi-sta.pl'>e-mail: poczta@mi-sta.pl</a></div>
        </address>
     );
}
 
export default Address;