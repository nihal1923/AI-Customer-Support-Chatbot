function SuggestedQuestions({ suggestions, sendMessage, show }) {

  if (!show) return null;

  return (
    <div className="suggestions">
      {suggestions.map((question, index) => (
        <button
          key={index}
          className="suggestion-btn"
          onClick={() => sendMessage(question)}
        >
          {question}
        </button>
      ))}
    </div>
  );
}

export default SuggestedQuestions;