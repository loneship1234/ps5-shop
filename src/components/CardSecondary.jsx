import React,{useState} from 'react'

function CardSecondary(props) {
    const [Class, setClass] = useState(' ');
  return (
    <div data-theme='fantasy' className={"card w-96 bg-base-100 transition-2 "+Class} onMouseEnter={()=>{setClass('image-full')}}>
  <figure><img src={require('../img/dooms eternal.jpg')}  alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">dooms eternal</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, nostrum!</p>
     <div className="card-actions justify-end">
      <button className="btn btn-error">Buy Now</button>
    </div>
  </div> 
</div>
  )
}

export default CardSecondary