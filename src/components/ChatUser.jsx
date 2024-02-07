import React, { useEffect, useState ,useRef} from 'react';
import { AudioVisualizer } from 'react-audio-visualize';
import { Howl } from 'howler';

const ChatUser = (audio) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);







  console.log('inside chatuser',audio)

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='w-full h-[74px] mb-5 relative'>
      <audio hidden ref={audioRef}  
      // src='src/client/assets/tt.mp3'
      src={audio.audio}
      />
      
      <div className='absolute gap-2 rounded-[10px] bg-white h-[4.63rem] overflow-hidden flex justify-center items-center  right-5 w-[377px] '>
        <img onClick={togglePlayPause} className="w-[37px] relative  overflow-hidden h-[2.31rem]" src="https://cdn.discordapp.com/attachments/1198196635780522055/1202501247387705374/image.png?ex=65cdaf8e&is=65bb3a8e&hm=fc72920066c99c2c1f353441f8cd74a16c692575c8628ed17bbad9f6697ac9af&" alt="" />
        <img className="w-[310px] relative overflow-hidden h-[3.88rem] object-cover" src="https://cdn.discordapp.com/attachments/1198196635780522055/1202701916388196352/image.png?ex=65ce6a71&is=65bbf571&hm=07518960e25abcc69e5b1d08d8d8e70c3811398c4a3d75afd3da8b8fa286f290&" alt="" />
      </div>
    </div>
  );
};

export default ChatUser;
