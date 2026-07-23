function ChatInput({
  message,
  setMessage,
  sendMessage
}) {

  return (
    <div className="input-container">

      <input
        type="text"
        placeholder="Ask something about TechNova..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
      />

      <button onClick={() => sendMessage()}>
        Send
      </button>

    </div>
  );
}

export default ChatInput;