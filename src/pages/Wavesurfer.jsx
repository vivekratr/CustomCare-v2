import React from 'react'
import { useRef,useEffect,useState } from 'react'
import WaveSurfer from 'wavesurfer.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlay,
    faPause, 
    
} from '@fortawesome/free-solid-svg-icons'


const Wavesurfer = ({audio}) => {
    const wavesurfer = useRef(null)
    const waveformRef = useRef(null)
    const [volume,setVolume]=useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration,setDuration] = useState(0)
    const [currentTime,setCurrentTime] = useState(0)
    const [audioFileName,setAudioFileName] = useState('')


    function formatTime(seconds){
      let date=new Date(0);
      date.setSeconds(seconds)
      return date.toISOString().substr(11,8)
    }
    const formWaveSurferOptions = (ref) =>({
        container: ref,
        waveColor: "violet",
        progressColor: "purple",
        cursorColor: "navy",
        responsive:true,
        height:80,
        normalize:true,
        backend:'WebAudio',
        barWidth:2,
        barGap:3,
      })

      const handlePlayPause=()=>{
        setIsPlaying(!isPlaying);
        wavesurfer.current.playPause();
      }


      useEffect(()=>{
          const options = formWaveSurferOptions(waveformRef.current)
          wavesurfer.current=WaveSurfer.create(options)

          wavesurfer.current.load(audio)

          wavesurfer.current.on('ready',()=>{
            setDuration(wavesurfer.current.getDuration())
            setAudioFileName(audioFileName.split('.'.pop()))
          })

          return()=>{
            wavesurfer.current.un('audioprocess')
            wavesurfer.current.un('ready')
            wavesurfer.current.destroy();
          }

      },[audio])

  return (
    <div id='waveform' ref={waveformRef} className='w-full'>
      <div className="controls">
        <button onClick={handlePlayPause}>
            <FontAwesomeIcon icon={ isPlaying ? faPause : faPlay }/>
        </button>
      </div>
      <div className="audio-info">
        <span>
          Playing : {audioFileName} <br/>

        </span>
         <span>
          Duration : {formatTime(duration)} |Current TIme:{' '}
          {formatTime(currentTime)} <br />
         </span>
      </div>
    </div>
  )
}

export default Wavesurfer
