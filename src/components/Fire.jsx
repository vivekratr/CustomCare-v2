import React from "react";
import ChatUser from "./ChatUser";
import axios from "axios";
// import { saveAs } from "file-saver";
import { useState, useRef } from "react";
import ChatAi from "./ChatAi";
import CombineChatLayout from "./CombineChatLayout";
const Fire = () => {
  const [played, setPlayed] = React.useState(false);
  const [showControl, setShowControl] = React.useState(false);
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioMessages, setAudioMessages] = useState([]);

  const addAudioMessage = (aaudioBlob, isRight,text) => {
    console.log('insdie addAudioMessage',text);
    setAudioMessages((prevAudioMessages) => [
      ...prevAudioMessages,
      { isRight, aaudioBlob,text, id: Date.now() },
    ]);
  };
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
      console.error("Error accessing microphone:", error);
    }
  };

  const handleStopRecording = () => {
    setRecording(false);
    console.log("stopped recording");

    if (mediaRecorder.current && mediaRecorder.current.state === "recording") {
      mediaRecorder.current.stop();
      setRecording(false);
    }

    if (chunks.current.length > 0) {
      const blob = new Blob(chunks.current, { type: "audio/wav" });
      setAudioBlob(blob);

      // Save the recorded audio locally
      const audioURL = URL.createObjectURL(blob);
      setAudioURL(audioURL);

      chunks.current = [];
    }
  };

  const handleSendAudio = () => {
    if (audioBlob) {
      addAudioMessage(audioURL, true,'');
      const formData = new FormData();
      let translateText
      formData.append("audio", audioBlob, "audio.wav");

      axios
        .post("https://customcare-v7j1.onrender.com/", formData, { responseType: "blob" })
        .then((response) => {
          axios
          .get("https://customcare-v7j1.onrender.com/anstext").then(
            (res)=>{
              console.log('trying text get',res)
              translateText= res.data
              console.log("type of responese data", response);
              // saveAs(response.data, "received_audio.wav");
    
              const formData2 = new FormData();
              formData2.append("audio", audioBlob, "");
              console.log(translateText)
              addAudioMessage(response.data,false,translateText)
            })
          // Assuming the server responds with the audio data
          // axios.post("/api/save", response.data).catch(console.log("err", err));
        })
        .catch((error) => {
          console.error("Error uploading or receiving audio:", error);
        });
    } else {
      console.error("No recorded audio to send.");
    }
  };

  const handleSendCompanyName = () => {
    const jsonData = {
      Company_id: "1013",
    };

    axios
      .post("https://customcare-v7j1.onrender.com/companyid", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Handle the response if needed
        console.log("Server response:", response);
      })
      .catch((error) => {
        console.error("Error sending text data:", error);
      });
  };

  return (
    <div className="relative w-full pt-[74px] bg-[#090b1e] h-full">
      <div className="w-[322px] mx-auto relative rounded-full bg-black h-[20.13rem] overflow-hidden">
        <img
          className="absolute top-[0rem] left-[] w-[43.5rem] h-[26.25rem] object-cover"
          alt=""
          src={
            "https://cdn.discordapp.com/attachments/1198196635780522055/1202484477851467796/image.png?ex=65cd9ff0&is=65bb2af0&hm=53a5d54b145da705ef0f33408a3cb01e8c3eaeb64cb299f1e7bf1ef20d82285b&"
          }
        />
      </div>
      <div className="h-[380px] relative w-full overflow-y-scroll ">
        {/* <div>
          <ChatUser />
        </div>
        <div>
          <ChatAi text={txt} />
        </div>
        <div>
          <ChatUser />
        </div> */}
        {audioMessages.map((audioMessage) => (
          <CombineChatLayout
            key={audioMessage.id}
            aaudioBlob={audioMessage.aaudioBlob}
            isRight={audioMessage.isRight}
            translateText={audioMessage.text}
          />
        ))}
      </div>

      <div
        id="animate"
        className="flex pt-[40px] transition-all duration-1000 pb-[19px] w-full justify-center gap-[27px] relative items-center"
      >
        <img
          onClick={() => {
            setShowControl(false);
          }}
          className={`w-[61px] h-[61px] object-cover transition-all duration-500 ${
            !showControl ? "z-[-10] translate-x-[50%] relative" : ""
          }`}
          src="https://cdn.discordapp.com/attachments/1198196635780522055/1202710702406762547/image.png?ex=65ce72a0&is=65bbfda0&hm=bd68778c21df0166c2d65e5058b7a3799a16b094cfc41ce27d0b2bae49004be7&"
          alt=""
        />

        {!played ? (
          <img
            className="w-[106px] h-[106px] object-cover"
            // src=""
            onClick={() => {
              handleStartRecording();
              setShowControl(false);
              setPlayed((p) => !p);
            }}
            src="https://cdn.discordapp.com/attachments/1198196635780522055/1202710806765109278/image.png?ex=65ce72b9&is=65bbfdb9&hm=e12d4ec595e3238c6bcf2c3b4d2e524a62a9275b5cbe9fe6c3c5b6c3ade097ef&"
            alt=""
          />
        ) : (
          <img
            onClick={() => {
              handleStopRecording();

              setShowControl(true);
              setPlayed((p) => !p);
            }}
            className="w-[106px] h-[106px] animate-spin object-cover"
            src="https://cdn.discordapp.com/attachments/1198196635780522055/1202710806765109278/image.png?ex=65ce72b9&is=65bbfdb9&hm=e12d4ec595e3238c6bcf2c3b4d2e524a62a9275b5cbe9fe6c3c5b6c3ade097ef&"
            alt=""
          />
        )}

        <img
          onClick={() => {
            handleSendCompanyName();
            handleSendAudio();
            setShowControl(false);
          }}
          className={`w-[61px] hover:scale-105  h-[61px] object-cover transition-all duration-700 ${
            !showControl ? "z-[-10] translate-x-[-50%] relative" : ""
          }`}
          alt=""
          src="https://cdn.discordapp.com/attachments/1198196635780522055/1202710866546524240/image.png?ex=65ce72c7&is=65bbfdc7&hm=4f42fc464319fe5e0600e480050eff1e1b1d33360399f8ea501a607c472c2606&"
        />
      </div>
    </div>
  );
};

export default Fire;
