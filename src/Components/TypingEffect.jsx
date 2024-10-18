import React, { useState, useEffect } from 'react';

const TypingEffect = ({ steps, speed = 100, delay = 1000, loop = true }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [index,setIndex] = useState(0);
  useEffect(() => {
    let text = steps[currentStep];

    const typeText = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((index) => index+1)
      }
      else {
        clearInterval(typingInterval);
        setTimeout(() => setIsTyping(false), delay);
      }
    };

    const deleteText = () => {
      if (displayedText.length > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } 
      else {
        setIsTyping(true);
        setCurrentStep((prev) => (prev + 1) % steps.length);
        setIndex(0)
      }
    };

    const typingInterval = setInterval(() => {
      if (isTyping) {
        typeText();
      } else {
        deleteText();
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [isTyping, currentStep, displayedText, steps, speed, delay]);

  return <div>{displayedText}</div>;
};

export default TypingEffect;
