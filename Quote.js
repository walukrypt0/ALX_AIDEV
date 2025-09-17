
import { use } from 'react';

const fetchQuote = async () => {
  const res = await fetch('https://api.quotable.io/random');
  const data = await res.json();
  return data;
};

export default function Quote() {
  const randomQuote = use(fetchQuote());

  return (
    <div>
      <p>"{randomQuote.content}"</p>
      <strong>- {randomQuote.author}</strong>
    </div>
  );
}
