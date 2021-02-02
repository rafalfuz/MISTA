import React from 'react';
import './Product.scss'

const Product = () => {

    const items = ['naszyjniki', 'łańcuszki', 'kolczyki', 'pierścionki', 'bransoletki', 'sekretniki', 'zawieszki', 'spinki']

    const item = items.map((item)=><li key={item} className='product__list__item'>{item}</li>)

    return ( 
        <div className='product'>
            <ul className='product__list'>
                {item}
            </ul>
        </div>
     );
}
 
export default Product;