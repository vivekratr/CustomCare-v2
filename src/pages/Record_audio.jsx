import axios from 'axios';
// import { saveAs } from 'file-saver';
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

      

      chunks.current = [];
    }
  };

  


const handleSendAudio = () => {
  
  if (audioBlob) {
    const formData = new FormData();
    formData.append('audio', audioBlob, 'audio.wav');
    
    

    axios.post('http://127.0.0.1:5000/', formData, { responseType: 'blob' })
      .then(response => {
        // Assuming the server responds with the audio data
        
        // saveAs(response.data, 'received_audio.wav');
        
        const formData2 = new FormData()
        formData2.append('audio',audioBlob,'')
        axios.post('/api/save',response.data).catch(
          console.log("err",err))
        
      })
      .catch(error => {
        console.error('Error uploading or receiving audio:', error);
      });
  } else {
    console.error('No recorded audio to send.');
  }
};

const handleSendCompanyName = () => {
  const jsonData = {
    Company_id: '3',
  };

  axios.post('http://127.0.0.1:5000/companyid', jsonData, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      // Handle the response if needed
      console.log('Server response:', response);
 
    })
    .catch(error => {
      console.error('Error sending text data:', error);
    });
};


const checkLogin = () => {
  const jsonData = {
    'mail': 'ecomm@gmail.com',
    'password':"shreyash@12"
  };

  axios.post('http://127.0.0.1:5000/checkuser', jsonData, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      // Handle the response if needed
      console.log('Server response:', response);
 
    })
    .catch(error => {
      console.error('Error sending text data:', error);
    });
};

//whenn company registers
const handleSendCompanyName_Data = () => {
  const jsonData = {
    Company_id: '3',
    Terms_and_condition:`Admission and Registration:
    Patients seeking medical attention must complete the registration process before receiving any services. All personal and medical information provided must be accurate and up-to-date.
    
    Treatment Consent:
    By seeking medical services, patients and their legal representatives implicitly consent to the recommended treatments and procedures deemed necessary by the medical staff. In emergency situations, treatment may be administered without explicit consent.Monday:

    Dr. Smith:
    
    9:00 AM - 12:00 PM: General Consultations
    1:00 PM - 3:00 PM: Procedure Room
    4:00 PM - 6:00 PM: Follow-up Appointments
    Dr. Patel:
    
    10:00 AM - 1:00 PM: Pediatrics Clinic
    2:00 PM - 5:00 PM: Administrative Tasks
    6:00 PM - 8:00 PM: Orthopedic Consultations
    Tuesday:
    
    Dr. Smith:
    
    8:30 AM - 11:30 AM: Surgery Block
    1:30 PM - 4:30 PM: Cardiology Clinic
    5:30 PM - 7:30 PM: Emergency On-Call
    
    Dr. Patel:

9:00 AM - 12:00 PM: Obstetrics and Gynecology
2:00 PM - 4:00 PM: Radiology Meetings
5:00 PM - 8:00 PM: General Surgery Consultations`,
    CIN:3,
    mail:'we@care.com',
    password:'carehub'

  };

  axios.post('http://127.0.0.1:5000/insertdata', jsonData, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      // Handle the response if needed
      console.log('Server response:', response);
      
    })
    .catch(error => {
      console.error('Error sending text data:', error);
    });
};


  return (
    <div className='bg-blue-500 h-full w-full flex flex-col items-center justify-center'>
      <h2>Audio Recorder</h2>
      {recording ? (
        <button onClick={handleStopRecording}>Stop Recording</button>
      ) : (
        <>
          <button onClick={handleStartRecording}>Start Recording</button>
          <button onClick={()=>{
            handleSendCompanyName()
            handleSendAudio()}} disabled={!audioBlob}>
            Send Audio to Server
          </button>
          <button onClick={checkLogin}>Check Login</button>
          <button onClick={handleSendCompanyName}>company name</button>
          <button onClick={handleSendCompanyName_Data}>Company Data</button>
          {audioURL && <audio controls src={audioURL} />}
        </>
      )}
    </div>
  );
};

export default AudioRecorder;
