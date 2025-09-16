
import { Suspense } from 'react';
import LikeButton from './LikeButton';
import Quote from './Quote';

export default function App() {
  return (
    <div>
      <h1>React Server Components Example</h1>
      <LikeButton />
      <hr />
      <h2>Random Quote</h2>
      <Suspense fallback={<p>Loading quote...</p>}>
        <Quote />
      </Suspense>
    </div>
  );
}
