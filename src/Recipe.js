import React from 'react'

function Recipe({title, image}) {
  return (
    <div className='box'>
      <div className='title'><h4 className='title-text'>{title}</h4></div>
        <hr className='hr-elem' />
        <img className='box-image' src={image} alt="" />
    </div>
  )
}

export default Recipe