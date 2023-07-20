import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What programming languages are supported by your API?',
      answer: 'Our API currently supports several popular programming languages including Java, Python, Ruby, and JavaScript. We also provide SDKs and code samples to make integration with our API as easy as possible.',
    },
    {
      id: 2,
      question: 'How do I authenticate requests to your API?',
      answer: 'We use OAuth 2.0 for authentication, which is an industry-standard protocol for secure API authentication. You can find detailed instructions on how to get started with OAuth 2.0 authentication in our documentation.',
    },
    {
      id: 3,
      question: 'What kind of rate limits does your API have?',
      answer: 'We have rate limits in place to prevent abuse and ensure fair usage for all of our users. The rate limits vary depending on the endpoint and the plan you are on, but they are clearly documented in our API documentation. If you need higher rate limits, you can upgrade to a higher plan or contact our support team to discuss custom options.',
    },
    // Add more FAQs here
  ];

  const handleExpand = (id) => {
    if (id === expandedId) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div className="faq-section">
      <div className="faq-column">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <p className="faq-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="faq-column">
        {faqs.map((faq) => (
          <div className="faq-item" key={faq.id}>
            <div className="faq-question-container">
              <h3 className="faq-question">{faq.question}</h3>
              <div
                className={`faq-dropdown ${expandedId === faq.id ? 'expanded' : ''}`}
                onClick={() => handleExpand(faq.id)}
              >
                &#x25BC;
              </div>
            </div>
            {expandedId === faq.id && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
