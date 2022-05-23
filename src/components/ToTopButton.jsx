import React from 'react'

function ToTopButton() {
  const toTop=()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
  return (
<span className='flex w-[25px] h-[50px] rounded-3xl border-2 shadow-2xl border-black fixed top-[50em] left-[87em] cursor-pointer' onClick={toTop}>
  <span className='block w-4 h-4 bg-black rounded-full m-auto animation'></span>
</span>
  )
}

export default ToTopButton