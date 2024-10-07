// import React, { useState, useEffect, useRef } from "react";
// import ChatMessage from "./ChatMessage";
// import './Chat.css';
// import Features from "./Features";

// function Chatbot({ showChatbot, onClose }) {
//   const [messages, setMessages] = useState([
//     { text: "Welcome to Anti-AI. How can I help you?", type: "incoming" },
//   ]);

//   const [inputMessage, setInputMessage] = useState("");
//   const [textareaVisible, setTextareaVisible] = useState(false); 
//   const chatboxRef = useRef(null);
//   const textareaRef = useRef(null);

//   useEffect(() => {
//     if (chatboxRef.current) {
//       chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
//     }
//   }, [messages]);

//   const handleInputChange = (e) => {
//     setInputMessage(e.target.value);
//     adjustTextareaHeight();
//   };

//   const adjustTextareaHeight = () => {
//     if (textareaRef.current) {
//       textareaRef.current.style.height = "auto";
//       textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
//     }
//   };

//   const handleFeatureClick = (feature) => {
//     if (feature === 'Other') {
//       setTextareaVisible(true);
//     } else {
//       setTextareaVisible(false); 
//       setMessages(prevMessages => [
//         ...prevMessages,
//         { text: `You selected: ${feature}`, type: "outgoing" },
//         { text: "Thinking...", type: "incoming" }
//       ]);

//       setTimeout(() => {
//         fetch('https://aws.antiai.ltd/apii/chat', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ message: feature }),
//         })
//         .then(response => response.json())
//         .then(data => {
//           setMessages(prevMessages => {
//             const newMessages = [...prevMessages];
//             newMessages.pop(); 
//             return [...newMessages, { text: data.response, type: "incoming" }];
//           });
//         })
//         .catch(error => {
//           console.error('Error:', error);
//           setMessages(prevMessages => {
//             const newMessages = [...prevMessages];
//             newMessages.pop(); 
//             return [...newMessages, { text: "Sorry, something went wrong. Please try again.", type: "incoming" }];
//           });
//         });
//       }, 100); 
//     }
//   };

//   const handleSendMessage = () => {
//     if (!inputMessage.trim()) return;

//     setMessages([...messages, { text: inputMessage, type: "outgoing" }]);

//     setInputMessage("");

//     setMessages(prevMessages => [
//       ...prevMessages,
//       { text: "Thinking...", type: "incoming" },
//     ]);

//     setTimeout(() => {
//       fetch('https://aws.antiai.ltd/apii/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message: inputMessage }),
//       })
//       .then(response => response.json())
//       .then(data => {
//         setMessages(prevMessages => {
//           const newMessages = [...prevMessages];
//           newMessages.pop(); 
//           return [...newMessages, { text: data.response, type: "incoming" }];
//         });
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         setMessages(prevMessages => {
//           const newMessages = [...prevMessages];
//           newMessages.pop(); 
//           return [...newMessages, { text: "Sorry, something went wrong. Please try again.", type: "incoming" }];
//         });
//       });
//     }, 200); 
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   return (
//     <div className={`chatbot ${showChatbot ? "show" : ""}`}>
//       <header className="header-chat">
//         <img 
//           src='/static/robot-assistant.png'
//           alt="Profile"
//           className="profile-image"
//         />
//         <div className="chat-logo">
//           <img
//             src="../static/anti-ai-updated-logo.png"
//             alt="Anti AI Logo"
//             className="anti-ai-logo"
//           />
//           {/* <p>Your Virtual Assistant</p> */}
//         </div>
//         <span className="close-btn material-symbols-outlined" onClick={onClose}>
//           close
//         </span>
//       </header>

//       <Features onFeatureClick={handleFeatureClick} />

//       <ul className="chatbox" ref={chatboxRef}>
//         {messages.map((message, index) => (
//           <ChatMessage key={index} message={message} />
//         ))}
//       </ul>

//       {textareaVisible && (
//         <div className="chat-input">
//           <textarea
//             ref={textareaRef}
//             placeholder="Enter a message..."
//             value={inputMessage}
//             onChange={handleInputChange}
//             onKeyDown={handleKeyDown}
//           ></textarea>
//           <span
//             id="send-btn"
//             className="material-symbols-outlined"
//             onClick={handleSendMessage}
//           >
//             send
//           </span>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Chatbot;


import React, { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import './Chat.css';
import Features from "./Features";

function Chatbot({ showChatbot, onClose }) {
  const [messages, setMessages] = useState([
    { text: "Welcome to Anti-AI. How can I help you?", type: "incoming" },
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [textareaVisible, setTextareaVisible] = useState(false); 
  const chatboxRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleFeatureClick = (feature) => {
    if (feature === 'Other') {
      setTextareaVisible(true);
    } else {
      setTextareaVisible(false); 
      setMessages(prevMessages => [
        ...prevMessages,
        { text: `You selected: ${feature}`, type: "outgoing" },
        { text: "Thinking...", type: "incoming" }
      ]);

      setTimeout(() => {
        fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: feature }),
        })
        .then(response => response.json())
        .then(data => {
          setMessages(prevMessages => {
            const newMessages = [...prevMessages];
            newMessages.pop(); 
            return [...newMessages, { text: data.response, type: "incoming" }];
          });
        })
        .catch(error => {
          console.error('Error:', error);
          setMessages(prevMessages => {
            const newMessages = [...prevMessages];
            newMessages.pop(); 
            return [...newMessages, { text: "Sorry, something went wrong. Please try again.", type: "incoming" }];
          });
        });
      }, 100); 
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    setMessages([...messages, { text: inputMessage, type: "outgoing" }]);

    setInputMessage("");

    setMessages(prevMessages => [
      ...prevMessages,
      { text: "Thinking...", type: "incoming" },
    ]);

    setTimeout(() => {
      fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      })
      .then(response => response.json())
      .then(data => {
        setMessages(prevMessages => {
          const newMessages = [...prevMessages];
          newMessages.pop(); 
          return [...newMessages, { text: data.response, type: "incoming" }];
        });
      })
      .catch(error => {
        console.error('Error:', error);
        setMessages(prevMessages => {
          const newMessages = [...prevMessages];
          newMessages.pop(); 
          return [...newMessages, { text: "Sorry, something went wrong. Please try again.", type: "incoming" }];
        });
      });
    }, 200); 
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`chatbot ${showChatbot ? "show" : ""}`}>
      <header className="header-chat">
        <img 
          src='/static/robot-assistant.png'
          alt="Profile"
          className="profile-image"
        />
        <div className="chat-logo">
          <img
            src="../static/anti-ai-updated-logo.png"
            alt="Anti AI Logo"
            className="anti-ai-logo"
          />
          {/* <p>Your Virtual Assistant</p> */}
        </div>
        <span className="close-btn material-symbols-outlined" onClick={onClose}>
          close
        </span>
      </header>

      <Features onFeatureClick={handleFeatureClick} />

      <ul className="chatbox" ref={chatboxRef}>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </ul>

      {textareaVisible && (
        <div className="chat-input">
          <textarea
            ref={textareaRef}
            placeholder="Enter a message..."
            value={inputMessage}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          ></textarea>
          <span
            id="send-btn"
            className="material-symbols-outlined"
            onClick={handleSendMessage}
          >
            send
          </span>
        </div>
      )}
    </div>
  );
}

export default Chatbot;