import React from 'react';
import './componentTop.scss';
import Header from './components/Header';
import Words from './components/Words';
import Picture from './components/Picture';

const ComponentTop = () => {
    return (
        <section className='case caseTop'>
            <header className='caseTop__header'>
                <Header/>
            </header>
            <article className='caseTop__words'>
                <Words/>
            </article>
            <article className='caseTop__picture'>
                <Picture/>
            </article>
        </section>
    )
    
}
 
export default ComponentTop;