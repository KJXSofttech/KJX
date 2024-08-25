// src/component/ui/Chatbot.js
import React from 'react';
import styled from 'styled-components';

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
  z-index: 1000;
`;

// Define the port number directly here
const CHATBOT_PORT = 4000;

const Chatbot = () => {
  // Use the defined port number
  const url = `http://13.201.84.145:${CHATBOT_PORT}/`;

  return (
    <ChatbotContainer>
      {/* Your chatbot UI here */}
      <iframe 
        src={url} 
        style={{ width: '500px', height: '800px', border: 'none' }}
        title="Chatbot"
      />
    </ChatbotContainer>
  );
};

export default Chatbot;
