import React, { useState } from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import './likeComponent.css';

const LikeComponent = ({ initialLikes, initialDislikes }) => {
  const [likes, setLikes] = useState(initialLikes || 0);
  const [dislikes, setDislikes] = useState(initialDislikes || 0);
  const [likeOrDislike, setLikeOrDislike] = useState(null);

  const handleLikeClick = () => {
    if (likeOrDislike === 'like') {
      setLikes(likes - 1);
      setLikeOrDislike(null);
    } else {
      if (likeOrDislike === 'dislike') {
        setDislikes(dislikes - 1);
      }
      setLikes(likes + 1);
      setLikeOrDislike('like');
    }
  };

  const handleDislikeClick = () => {
    if (likeOrDislike === 'dislike') {
      setDislikes(dislikes - 1);
      setLikeOrDislike(null);
    } else {
      if (likeOrDislike === 'like') {
        setLikes(likes - 1);
      }
      setDislikes(dislikes + 1);
      setLikeOrDislike('dislike');
    }
  };

  return (
    <div className="like-component">
      <span
        className={`like-icon ${likeOrDislike === 'like' ? 'liked' : ''}`}
        onClick={handleLikeClick}
      >
        <AiOutlineLike className="icon" /> {likes}
      </span>
      <span
        className={`dislike-icon ${
          likeOrDislike === 'dislike' ? 'disliked' : ''
        }`}
        onClick={handleDislikeClick}
      >
        <AiOutlineDislike className="icon" />{' '}
        {likeOrDislike === 'dislike' ? dislikes : ''}
      </span>
    </div>
  );
};

export default LikeComponent;
