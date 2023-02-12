import * as React from 'react';
import './style.css';

export default function App() {
  const test = () => {
    let temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -5];
    let pairs = [];
    for (let i = 0; i < temp.length; i++) {
      for (let j = i + 1; j < temp.length; j++) {
        if (temp[i] + temp[j] === 10) {
          pairs.push([temp[i], temp[j]]);
        }
      }
    }
    console.log(pairs);
  };

  return (
    <div>
      <div>
        find pair whos addition will be 10. From array <br /> [1, 2, 3, 4, 5, 6,
        7, 8, 9, 10, -5]
      </div>
      <button onClick={() => test()}>press to console output</button>
    </div>
  );
}
