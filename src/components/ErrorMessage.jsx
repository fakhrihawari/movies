import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div className="mt-5 shadow-lg p-5 d-flex align-items-center justify-content-center slide-in">
        <div className='font-poppins'>{message}</div>
    </div>
  )
}

export default ErrorMessage