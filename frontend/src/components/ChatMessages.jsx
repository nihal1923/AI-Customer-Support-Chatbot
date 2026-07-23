function ChatMessages({ messages, chatEndRef }) {
  return (
    <div className="chat-container">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message-row ${
            msg.sender === "user" ? "user-row" : "bot-row"
          }`}
        >
          {msg.sender === "bot" && (
            <div className="avatar bot-avatar">
              🤖
            </div>
          )}

          <div className="message-content">
            <div
              className={`message ${
                msg.sender === "user"
                  ? "user-message"
                  : "bot-message"
              }`}
            >
              {msg.typing ? (
                <div className="typing">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              ) : (
                msg.text
              )}
            </div>

            {!msg.typing && (
              <div
                className={`time ${
                  msg.sender === "user"
                    ? "user-time"
                    : "bot-time"
                }`}
              >
                {msg.time}
              </div>
            )}
          </div>

          {msg.sender === "user" && (
            <div className="avatar user-avatar">
              👤
            </div>
          )}
        </div>
      ))}

      <div ref={chatEndRef}></div>
    </div>
  );
}

export default ChatMessages;