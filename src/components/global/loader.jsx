import React from 'react'



export const Loader = (
  loading,
  children,
  className,
) => {
  return loading ? (
    <div className={`${className}`}>
     <span className='loader'></span>
    </div>
  ) : (
    children
  )
}