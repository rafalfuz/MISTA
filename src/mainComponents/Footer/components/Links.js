import React from 'react';
import './Links.scss'

const Links = () => {

    const linksList = [
        {label: 'Link1', link: 'www.link1.pl'},
        {label: 'Link2', link: 'www.link2.pl'},
        {label: 'Link3', link: 'www.link3.pl'},
        {label: 'Link4', link: 'www.link4.pl'},
        {label: 'Link5', link: 'www.link5.pl'},
        ]
    const links = linksList.map((link)=><li key={link.label} className='links__list__link'><a href={link.link} target='blank' rel="noopener noreferrer">{link.label}</a></li>)    
    
    return ( 
        <div className='links'>
            <div className='links__title'>Przydatne linki</div>
            <ul className='links__list'>
                {links}
            </ul>
        </div>
     );
}
 
export default Links;
