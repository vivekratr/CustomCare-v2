import React from 'react'
import ChatAi from './ChatAi'
import ChatUser from './ChatUser'

const CombineChatLayout = (props) => {
  
  return (

    <div>
        {props.isRight?<ChatUser audio={props.aaudioBlob}/>:<ChatAi  text={props.translateText} audio={props.aaudioBlob}/>}
      
      
    </div>
  )
}

export default CombineChatLayout
