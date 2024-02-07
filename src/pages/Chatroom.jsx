import React, { useContext } from "react";
import ChatUser from "../components/ChatUser";
import axios from "axios";
// import { saveAs } from "file-saver";
import { useState, useRef } from "react";
import ChatAi from "../components/ChatAi";
import CombineChatLayout from "../components/CombineChatLayout";
import { useParams } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";
const Chatroom = () => {
  const [played, setPlayed] = React.useState(false);
  const [showControl, setShowControl] = React.useState(false);
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioMessages, setAudioMessages] = useState([]);
  const { compId } = useParams();
  console.log('compId',compId)

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
  const {isLoggedIn,messages} = useContext(ChatContext)
  console.log('inside chatrroom',isLoggedIn)

  const txt =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aspernatur obcaecati dolorum suscipit quaerat omnis commodi odit cupiditate corrupti libero labore, nihil neque quos est distinctio fuga, amet nesciunt alias totam magni reiciendis optio voluptas ut. Optio, aspernatur quasi. Quidem, ipsum? Accusantium impedit libero laborum cupiditate! Id sapiente quae quas nesciunt eum voluptatibus vero eaque vel laborum repellendus debitis laudantium enim nisi provident excepturi, molestias est adipisci numquam. Quae dolorum fugiat delectus modi vel alias ipsa animi explicabo ad a exercitationem expedita nostrum provident, excepturi in eius ullam sed, ut quaerat ipsum. Provident, hic fugit? Perspiciatis adipisci ullam, et deleniti consectetur ut consequuntur nisi dolorem optio, nemo unde, distinctio reiciendis aut. Natus rerum dolores voluptatum odio laudantium doloremque. Minima corrupti libero voluptates molestias animi deserunt dolore inventore atque maiores rem harum possimus sequi nihil ipsum similique consequatur reiciendis illo, quae fuga blanditiis hic asperiores. Odio, vitae. Assumenda quod incidunt esse, ullam quae fuga placeat architecto sequi enim adipisci a eos ab laboriosam quasi libero delectus? Cupiditate tempora molestiae voluptates id veniam labore consequatur. Sint nihil iste in obcaecati quis quam ducimus, quae, ex ipsa dolorem molestias rerum facere, reiciendis suscipit illo ipsam eligendi pariatur quas labore. Mollitia voluptatum ducimus enim ratione eaque labore, earum sequi distinctio facere consectetur debitis nemo nulla odio veritatis natus est. Quidem ratione nam error aspernatur placeat nulla quos ab eveniet, inventore natus est vero molestiae quaerat pariatur. Quia eos iure dolorem laboriosam magni assumenda, ratione voluptas aliquam ducimus ea eius obcaecati placeat cumque amet similique voluptates laudantium? Sed libero magnam iure, consectetur dolore aspernatur dolor, dolores quasi nostrum illo corporis adipisci facilis debitis atque perspiciatis. Saepe vitae impedit doloribus corrupti repudiandae accusantium nulla beatae laudantium? Quidem natus nam ab. Tempore culpa, accusantium ratione molestias neque, et fuga nobis officia similique sint atque sapiente aspernatur repudiandae, tempora quos! Nesciunt nulla, accusantium quos recusandae ab possimus. Enim aspernatur eveniet officiis dolorem voluptatem maiores facere facilis quae quis amet molestiae culpa beatae, animi, similique consequatur non, accusantium blanditiis fugiat voluptas fugit illo. Nesciunt quas et repellendus error hic. Pariatur, deleniti. Est saepe vel numquam minima mollitia excepturi quaerat facere totam, explicabo sequi ducimus repudiandae debitis repellendus inventore quae omnis et, ratione consequatur earum. Quaerat, assumenda at ex, quas provident ab tenetur soluta harum eum temporibus reprehenderit similique incidunt ullam officia perspiciatis porro rem quos quisquam architecto blanditiis debitis. Iste rerum esse eos nesciunt illo nisi quaerat dignissimos sapiente perspiciatis dolorum? Rerum, modi magni dolorum vel deleniti beatae sint odio. Est praesentium, nobis consequatur repellendus veniam assumenda ipsum eaque magnam vel porro doloremque sequi illo sit deserunt eos, tempore impedit animi cupiditate ea accusantium adipisci voluptates, dignissimos quasi delectus. Tempora obcaecati voluptatem iure inventore esse sapiente porro voluptatibus accusantium saepe odio. Repellendus perferendis nesciunt accusamus commodi molestias ad libero expedita, quis nisi nihil blanditiis saepe fugiat tempora modi rem possimus sunt culpa consequuntur! Adipisci soluta eos quibusdam natus ullam nisi a aut quaerat perspiciatis esse possimus voluptatem quidem facere autem ducimus ratione, dicta quam blanditiis beatae velit enim? Earum?";

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
      Company_id: messages,
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

export default Chatroom;
