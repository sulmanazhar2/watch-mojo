// FAQItem.tsx
import React, { useState } from "react";
import "./faq-item.styles.scss";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item-component ${isOpen ? "open" : ""}`}>
      <div className="question" onClick={toggle}>
        <span className="question-text">{question}</span>
        <span className="icon">{isOpen ? "-" : "+"}</span>
      </div>
      <div className="answer">{answer}</div>
    </div>
  );
};

export default FAQItem;
