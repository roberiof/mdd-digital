import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
  containerStyles: string;
  text: string;
  delay?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ containerStyles, text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex , setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <p className={containerStyles}>{displayText}</p>;
};

export default TypingEffect;