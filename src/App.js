import React from 'react';
import New from './New';
import './App.css';
import './index.css'; //index.css appied here in li (list items)

function App({name}) {
  return <div>
    <span>Hello <strong>{name}</strong></span>
    <span>
    <ol>
  <li><strong>Graphics Designing</strong>
    <ul>
      <li>Adobe Iluustrator.</li>
      <li>Adobe Photoshop.</li>
      <li>Adobe Premeire Pro.</li>
      <li>Adobe After Effects.</li>
    </ul>
  </li>
  <li><strong>Web Development</strong>
    <ul>
      <li>HTML.</li>
      <li>CSS.</li>
      <li>Bootstrap.</li>
      <li>JavaScript.</li>
    </ul>
  </li>
</ol>
    </span>
    <New n1 = {2020} n2 = {2021} ></New>
  </div>
}

export default App;
