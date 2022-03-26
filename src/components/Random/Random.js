import React from 'react';

const Random = (props) => {
    return (
        <div>
            <div className='cartShow'>
                <img src={props.name.img} alt="" />
                <span>{props.name.name}</span>
                <span>{props.name.price}</span>

            </div>
        </div>
    );
};

export default Random;