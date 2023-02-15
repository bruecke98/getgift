import React from 'react';

function SimpleComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is a simple React component.</p>
    </div>
  );
}

export default SimpleComponent;
