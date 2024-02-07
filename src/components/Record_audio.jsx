import axios from 'axios';
import { saveAs } from 'file-saver';
import  { useState, useRef } from 'react';

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorder = useRef(null);
  const chunks = useRef([]);

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);
      chunks.current = [];

      mediaRecorder.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.current.push(e.data);
        }
      };

      mediaRecorder.current.onstop = () => {
        handleStopRecording();
      };

      mediaRecorder.current.start();
      setRecording(true);

      setTimeout(() => {
        mediaRecorder.current.stop();
      }, 50000); 
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const handleStopRecording = () => {
    setRecording(false);

    if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
      mediaRecorder.current.stop();
      setRecording(false);
    }

    if (chunks.current.length > 0) {
      const blob = new Blob(chunks.current, { type: 'audio/wav' });
      setAudioBlob(blob);

      // Save the recorded audio locally
      const audioURL = URL.createObjectURL(blob);
      setAudioURL(audioURL);

      // const downloadLink = document.createElement('a');
      // downloadLink.href = audioURL;
      // downloadLink.download = 'recorded_audio.wav';
      // document.body.appendChild(downloadLink);
      // downloadLink.click();
      // document.body.removeChild(downloadLink);

      chunks.current = [];
    }
  };

  // const handleSendAudio = () => {
  //   if (audioBlob) {
  //     const formData = new FormData();
  //     formData.append('audio', audioBlob, 'audio.wav');

  //     axios.post('http://127.0.0.1:5000/', formData)
  //       .then(response => {
  //         console.log(response.data);
  //       })
  //       .catch(error => {
  //         console.error('Error uploading audio:', error);
  //       });
  //   } else {
  //     console.error('No recorded audio to send.');
  //   }
  // };


const handleSendAudio = () => {
  if (audioBlob) {
    const formData = new FormData();
    formData.append('audio', audioBlob, 'audio.wav');

    axios.post('https://customcare-v7j1.onrender.com/', formData, { responseType: 'blob' })
      .then(response => {
        // Assuming the server responds with the audio data
        saveAs(response.data, 'received_audio.wav');
      })
      .catch(error => {
        console.error('Error uploading or receiving audio:', error);
      });
  } else {
    console.error('No recorded audio to send.');
  }
};


  return (
    <div>
      <h2>Audio Recorder</h2>
      {recording ? (
        <button onClick={handleStopRecording}>Stop Recording</button>
      ) : (
        <>
          <button onClick={handleStartRecording}>Start Recording</button>
          <button onClick={handleSendAudio} disabled={!audioBlob}>
            Send Audio to Server
          </button>
          {audioURL && <audio controls src={audioURL} />}
        </>
      )}
    </div>
  );
};

export default AudioRecorder;
