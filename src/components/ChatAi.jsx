import React, { useEffect, useState ,useRef} from 'react';

const ChatAi = (text) => {
  const audioRef = useRef(null);
  console.log('inside chatai',text)
  useEffect(() => {
    audioRef.current.play()
    console.log(text.array)
  
   
  }, [])
  

  return (
    <div className='w-[716px] py-10 relative px-[66px]'>
      <audio ref={audioRef}  src={URL.createObjectURL(text.audio)}/>
      <div className="w-full  rounded-[10px] bg-white   text-left text-[1rem] text-gray font-inter">
<div className="font-medium text-black inline-block px-4 py-7">{text.text}</div>
</div>
    </div>
  )
}

export default ChatAi
