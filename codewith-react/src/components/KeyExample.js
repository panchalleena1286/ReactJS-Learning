import React from "react";

// const items = ['item 1', 'item 2', 'item 3'];

// function KeyExample() {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// }

const items = [
  {id: 1, name: 'leena 1'},
  {id: 2, name: 'rachu 2'},
  {id: 3, name: 'jk 3'},
];

function KeyExample() {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}


export default KeyExample;