
"use client";

import { useState, useTransition } from 'react';
import { incrementLike } from './actions';

export default function LikeButton() {
  const [isPending, startTransition] = useTransition();
  const [likeCount, setLikeCount] = useState(0);

  const handleClick = () => {
    startTransition(async () => {
      const currentCount = await incrementLike();
      setLikeCount(currentCount);
    });
  };

  return (
    <>
      <p>Total Likes: {likeCount}</p>
      <button onClick={handleClick} disabled={isPending}>
        {isPending ? 'Liking...' : 'Like'}
      </button>
    </>
  );
}
