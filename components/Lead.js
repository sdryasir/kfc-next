import React from 'react'

function Lead(props) {
  return (
    <div className='d-flex align-items-center pt-5 pb-5'>
        <h2 className='text-white'>{props.title}</h2>
        <div className='h-line ms-3'></div>
    </div>
  )
}

export default Lead