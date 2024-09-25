// PostCard.jsx
import React from 'react';
import './PostCard.css'; // Assuming you'll add some basic CSS for styling

function PostCard({ title, body }) {
  return (
    <div className="post-card">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default PostCard;