import React from 'react';

const HelloWorld = ({ name }) => {
  return (
    <div className="hello-container">
      <h1>Hello, Focus Bear!</h1>
      <p>Welcome, I am <strong>{name}</strong>.</p>
    </div>
  );
};

export default HelloWorld;