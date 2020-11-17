import React from 'react';

import CheckboxWithLabel from './CheckboxWithLabel';

export default function App() {
  return (
    <div className="app">
      <CheckboxWithLabel
        labelOff={"Label Off"}
        labelOn={"Label On"}
      />
    </div>
  );
}