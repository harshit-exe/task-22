import React from 'react';
import useFetchPosts from './useFetch`';
import PostCard from './PostCard';

function App() {
  const { posts, loading, error } = useFetchPosts();

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="post-list">
      {posts.map(post => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default App;
