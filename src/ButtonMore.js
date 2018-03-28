import React from 'react'

const ButtonMore =(props)=>{
    return <button className='more_btn' onClick={() => props.onClick()} >Load More</button> 
}

export default ButtonMore