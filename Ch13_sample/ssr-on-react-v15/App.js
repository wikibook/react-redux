import React from 'react';

function App({ renderedAt }) {
  return (
    <div>
      <h1>Hello, SSR!</h1>
      <p>renderedAt: {renderedAt.getTime()}</p>
    </div>
  );
}

export default App;
