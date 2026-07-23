function Header({ clearChat }) {
  return (
    <div className="header">

      <div className="header-left">

        <div className="logo">
          🤖
        </div>

        <div>

          <h2>TechNova AI Assistant</h2>

          <div className="status">
            <span className="status-dot"></span>
            Online
          </div>

        </div>

      </div>

      <button
        className="clear-btn"
        onClick={clearChat}
      >
        🗑 Clear Chat
      </button>

    </div>
  );
}

export default Header;