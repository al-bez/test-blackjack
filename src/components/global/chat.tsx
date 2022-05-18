import React, { useId } from "react";
import styled from "styled-components";
import { DEFAULT_HISTORY } from "../../constants/constants";

const Smiles = styled(({ ...props }) => {
  return (
    <div {...props}>
      <img src="images/chat/smile.png" alt="smile" />
    </div>
  );
})`
  width: 20px;
  height: 20px;
  cursor: pointer;

  img {
    width: 100%;
  }
`;

const MessageInput = styled.input`
  background-color: #25272d;
  border: none;
  outline: none;

  color: #ffffff;
  font-family: Poppins;
  font-size: 12px;
`;

const SendButton = styled.button`
  background-color: #25272d;
  border: none;
  outline: none;
  cursor: pointer;
  img {
    width: 20px;
    height: 20px;
  }
`;

const ChatInput = styled(({ ...props }) => {
  return (
    <div {...props}>
      <Smiles
        onClick={() => {
          console.log("smiles logic");
        }}
      />
      <MessageInput
        placeholder="Enter your message"
        type="text"
        name="message-input"
        id="message-input"
      />
      <SendButton
        onClick={() => {
          console.log("send logic");
        }}
      >
        <img src="images/chat/send.png" alt="send icon" />
      </SendButton>
    </div>
  );
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #32353d;
  background-color: #25272d;
  border-radius: 29px;
  padding: 18px 26px;
  flex: 0 0 auto;
  margin: 0 8px 8px 8px;
`;

const ChatTitle = styled(({ ...props }) => {
  return (
    <div {...props}>
      Global Chat <img src="images/chat/chat-title.png" alt="chat" />
    </div>
  );
})`
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2b2e36;
  border-radius: 35px 35px 0 0;
  padding: 23px 23px 19px 39px;

  color: #ffffff;
  font-family: Poppins;
  font-size: 14px;

  img {
    width: 22px;
    height: 29px;
  }
`;

const PremiumColor = styled.span`
  color: #30bd73;
`;

const NormalColor = styled.span`
  color: #a3a7b1;
`;

const ChatMessage = styled(({ message, ...props }) => {
  return (
    <div {...props}>
      <div>
        <img src={message.avatar} alt="avatar" />
      </div>
      <div>
        {message.premium ? (
          <PremiumColor>
            {message.username} {message.time}
          </PremiumColor>
        ) : (
          <NormalColor>
            {message.username} {message.time}
          </NormalColor>
        )}
        <div className="message">{message.message}</div>
      </div>
    </div>
  );
})`
  font-family: Poppins;
  display: flex;
  gap: 24px;

  .message {
    max-width: 175px;
    margin: 12px 0 12px 0;
    border-radius: 13px;
    background-color: #24263a;
    color: #ffffff;
    font-family: Poppins;
    font-size: 12px;
    padding: 10px;
  }

  img {
    width: 35px;
    height: 40px;
  }
`;

const ChatHistory = styled(({ history = DEFAULT_HISTORY, ...props }) => {
  const id = useId();
  return (
    <div {...props}>
      {history.messages.map((message: any, index: number) => (
        <ChatMessage key={`${id}-${index}`} message={message} />
      ))}
    </div>
  );
})`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  padding: 25px;
`;

const Chat = styled(({ ...props }) => {
  return (
    <div {...props}>
      <ChatTitle />
      <ChatHistory />
      <ChatInput />
    </div>
  );
})`
  border-radius: 35px 35px 0 0;
  background-color: #18191e;
  width: 324px;
  min-height: calc(100vh - 93px);
  display: flex;
  flex-direction: column;
`;

export default Chat;
