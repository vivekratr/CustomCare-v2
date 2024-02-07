// VoiceSelector.js
import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const VoiceSelector = () => {
  const { voices, speak } = useSpeechSynthesis();
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en-US'); // Default language

  const handleVoiceChange = (event) => {
    const selectedVoiceURI = event.target.value;
    const selectedVoice = voices.find((voice) => voice.voiceURI === selectedVoiceURI);
    setSelectedVoice(selectedVoice);
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);
  };

  const handleSpeak = () => {
    const textToSpeak = 'Hello, this is a sample text.';
    speak({ text: textToSpeak, voice: selectedVoice, lang: selectedLanguage });
  };

  return (
    <div>
      <label>
        Select Voice:
        <select onChange={handleVoiceChange} value={selectedVoice ? selectedVoice.voiceURI : ''}>
          {voices.map((voice) => (
            <option key={voice.voiceURI} value={voice.voiceURI}>
              {voice.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Select Language:
        <select onChange={handleLanguageChange} value={selectedLanguage}>
          {/* Add the language options you need */}
          <option value="en-US">English (US)</option>
          <option value="es-ES">Spanish (Spain)</option>
          {/* Add more language options as needed */}
        </select>
      </label>
      <br />
      <button onClick={handleSpeak}>Speak</button>
    </div>
  );
};

export default VoiceSelector;
