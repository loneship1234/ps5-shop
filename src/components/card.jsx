import React from 'react'


function Card(props) {
    const isNew=()=>{ 
        if (props.isNew===true) {
            return (<div className={"badge select-none text-xs pb-1 pt-1 border-0 "+props.badgeColor}>NEW</div>)
    } }
// 
  return (
   
<div data-theme={props.theme} className="card transition-all hover:shadow-xl w-96 bg-base-100 shadow-lg mt-10">
  <figure>
      <img src={require('../img/'+props.game+'.jpg')} alt="poster" className='w-full pic transition-all' />
</figure>
  <div className="card-body">
    <h2 className="card-title capitalize">{props.game}
    {isNew()}
     </h2>
    <p>{props.text}</p>
    <div className="card-actions justify-end items-center">
    <div className="card-actions justify-start  mr-auto">
      <div className="badge badge-outline select-none">{props.category_1}</div>
      <div className="badge badge-outline select-none">{props.category_2}</div>
    </div>
      <button className={"btn border-0 "+props.btnColor}>Buy Now</button>
    </div>
  </div>
</div>

  )
}

export default Card