import React from "react";
import { motion } from "framer-motion";
import "./container.css";

function ChatMessage({ message }) {
  const messageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };



  const timestamp = message.timestamp 
    ? new Date(message.timestamp)
    : new Date();

  const formattedTime = isNaN(timestamp.getTime())
    ? "Invalid Date"
    : timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <motion.li
      className={`chat ${message.type}`}
      initial="hidden"
      animate="visible"
      variants={messageVariants}
      transition={{ duration: 0.3 }}
    >
      {message.type === "incoming" && (
        <span className="material-symbols-outlined bot-icon">smart_toy</span>
      )}
      <div className="message-content">
        
        {message.text}
        <span className="timestamp">
          {formattedTime}
        </span>
      </div>
    </motion.li>
  );
}

export default ChatMessage;
