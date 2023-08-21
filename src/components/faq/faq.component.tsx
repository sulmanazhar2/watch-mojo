import React from "react";

import "./faq.styles.scss";
import FAQItem from "../faq-item/faq-item.component";

const faqData = [
  {
    question: "How fast will I receive my designs?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl id faucibus faucibus, nunc nulla aliquet elit, id luctus diam nunc eget odio. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl.",
  },
  {
    question: "Why don’t we just hire our own in-house designer?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl id faucibus faucibus, nunc nulla aliquet elit, id luctus diam nunc eget odio. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl.",
  },
  {
    question: "How many requests can I have?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl id faucibus faucibus, nunc nulla aliquet elit, id luctus diam nunc eget odio. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl.",
  },
  {
    question: "How big/complicated can my Webflow site be?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl id faucibus faucibus, nunc nulla aliquet elit, id luctus diam nunc eget odio. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl.",
  },
  {
    question: "Do I get any revisions?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl id faucibus faucibus, nunc nulla aliquet elit, id luctus diam nunc eget odio. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl.",
  },
  {
    question: "How do I request designs?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl id faucibus faucibus, nunc nulla aliquet elit, id luctus diam nunc eget odio. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl. Nulla facilisi. Sed euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, vitae aliquam nisl nisl vitae nisl.",
  },

  // Add more FAQ items here
];

const FAQ: React.FC = () => {
  return (
    <div className="faq-component">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
