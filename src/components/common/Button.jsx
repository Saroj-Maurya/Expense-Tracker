import React from 'react'


const Button = ({title, image}) => {
  return (
    <div>
      <button><span><img src={image} alt="" className="button-image"/></span>{title}</button>
    </div>
  )
}

export default Button;
