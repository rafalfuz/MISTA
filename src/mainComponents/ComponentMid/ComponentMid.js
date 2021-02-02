import React from 'react';
import './componentMid.scss'
import Gallery from './components/Gallery'
import Product from './components/Product'
import About from './components/About'

const ComponentMid = () => {
    return (  
        <section className='case caseMiddle'>
            <div className='caseMiddle__gallery'>
                <Gallery/>
            </div>
            <div className='caseMiddle__product'>
                <Product/>
            </div>
            <div className='caseMiddle__about'>
                <About/>
            </div>
        </section>
    );
}
 
export default ComponentMid;