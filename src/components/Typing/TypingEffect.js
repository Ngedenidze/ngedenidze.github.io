import React, { useEffect, useState } from 'react';
import './index.scss'; // Import the CSS for styling

const TypingEffect = ({ textArray, typingSpeed, deletingSpeed, delay }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % textArray.length);
        }
      } else {
        if (charIndex < textArray[textIndex].length) {
          setCurrentText((prev) => prev + textArray[textIndex].charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    };

    const typingSpeedInterval = isDeleting ? deletingSpeed : typingSpeed;
    const typingTimeout = setTimeout(handleTyping, typingSpeedInterval);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, textArray, textIndex, typingSpeed, deletingSpeed, delay]);

  return (
    <span className="typing-effect">
      {currentText}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypingEffect;
