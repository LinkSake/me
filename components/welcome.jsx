import React from 'react'

const Welcome = ( props ) => {
    return (
        <div className='welcome'>
            <div className='flex-column welcome-img-container'>
                <img className='welcome' src={props.img} alt={props.title}/>
            </div>
            <div className='flex-column welcome-text '>
                <h1 className='flex-row'>{props.title}</h1>
                <span className='flex-row'>{props.children}</span>
            </div>
        </div>
    )
}

export default Welcome