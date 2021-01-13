import React from 'react'

const Welcome = ( props ) => {
    return (
        <div className='flex items-center'>
            <div className='flex-column'>
                <img className='welcome' src={props.img} alt={props.title}/>
            </div>
            <div className='flex-column'>
                <h1 className='flex-row'>{props.title}</h1>
                <span className='flex-row'>{props.children}</span>
            </div>
        </div>
    )
}

export default Welcome