import { useState, useRef, useEffect } from "react";
import "./App.css";

import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";
import SuggestedQuestions from "./components/SuggestedQuestions";

function App() {

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! Welcome to TechNova AI Customer Support.",
      time: getCurrentTime()
    },
    {
      sender: "bot",
      text: "How can I help you today?",
      time: getCurrentTime()
    }
  ]);

  const chatEndRef = useRef(null);

  const suggestions = [
    "🔋 Battery Issue",
    "💻 Laptop Not Starting",
    "🛡 Warranty Information",
    "🔄 Return Policy"
  ];


  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);


  const sendMessage = async (question = message) => {

    if (question.trim() === "") return;


    setMessages(prev => [
      ...prev,
      {
        sender: "user",
        text: question,
        time: getCurrentTime()
      },
      {
        sender: "bot",
        typing: true,
        time: ""
      }
    ]);


    setMessage("");


    try {

      const response = await fetch(
        `http://127.0.0.1:8000/chat?question=${encodeURIComponent(question)}`
      );


      const data = await response.json();


      setMessages(prev => {

        const updated = [...prev];

        updated.pop();


        updated.push({
          sender: "bot",
          text: data.response || data.error,
          time: getCurrentTime()
        });


        return updated;

      });


    } catch (error) {


      setMessages(prev => {

        const updated = [...prev];

        updated.pop();


        updated.push({
          sender: "bot",
          text: "❌ Unable to connect to server.",
          time: getCurrentTime()
        });


        return updated;

      });

    }

  };


  const clearChat = () => {

    setMessages([
      {
        sender: "bot",
        text: "👋 Hello! Welcome to TechNova AI Customer Support.",
        time: getCurrentTime()
      },
      {
        sender: "bot",
        text: "How can I help you today?",
        time: getCurrentTime()
      }
    ]);

  };


  return (

    <div className="app">

      {/* Header (replaced Header.jsx) */}
      <div className="header">

        <div>
          <h2>🤖 TechNova AI Assistant</h2>
          
        </div>

        

      </div>


      <SuggestedQuestions
        suggestions={suggestions}
        sendMessage={sendMessage}
        show={messages.length === 2}
      />


      <ChatMessages
        messages={messages}
        chatEndRef={chatEndRef}
      />


      <ChatInput
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />


    </div>

  );

}


export default App;