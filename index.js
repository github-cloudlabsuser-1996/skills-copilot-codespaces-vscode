import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('type markdown here');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea 
        value={markdown} 
        onChange={handleChange} 
      />
      <ReactMarkdown children={markdown} />
    </div>
  );
}
function reverseSentence(sentence) {
  let words = sentence.split(' ');
  let reversedWords = words.reverse();
  let reversedSentence = reversedWords.join(' ');
  let capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
  return capitalizedSentence;
}
