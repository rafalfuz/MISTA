import React from 'react';
import './Footer.scss'
import Address from './components/Address'
import Links from './components/Links'
import Note from './components/Note'
import Author from './components/Author'

const Footer = () => {
    return ( 
        <div className='footer'>
            <div className='footer__informations'>
            <Address/>
            </div>
            <div className='footer__links'>
            <Links/>
            </div>
            <div className='footer__note'>
            <Note/>
            </div>
            <div className='footer__author'>
            <Author/>
            </div>
        </div>
     );
}
 
export default Footer;