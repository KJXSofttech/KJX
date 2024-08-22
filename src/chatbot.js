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

const Chatbot = () => {
  return (
    <ChatbotContainer>
      {/* Your chatbot UI here */}
      <iframe 
        src="http://13.126.20.207:4000/" 
        style={{ width: '500px', height: '800px', border: 'none' }}
        title="Chatbot"
      />
    </ChatbotContainer>
  );
};

export default Chatbot;
