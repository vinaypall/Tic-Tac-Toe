import React from 'react'

const Square = (props)=>{
    return(
        <div onClick={props.onClick}
        className='square-container'>
            <h5>{props.value}</h5>
        </div>
    )
}

export default Square;