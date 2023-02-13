import React from "react";

const items = ['item 1', 'item 2', 'item 3'];

function KeyExample() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default KeyExample;