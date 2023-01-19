import React, { useState } from 'react';

function App() {
  const [initMap, setInitMap] = useState([1,2,3,4]);
  const handleClick = () => {
    setInitMap([1,2,3,4])
    var spanEle = document.getElementsByTagName('span');
    Array.from(spanEle).map(it => it.style.color = 'red')
  }
  
  return (
    <div className="App" id="app">
      {
        initMap.map((it,index) => <div key={Math.random()}><span>color</span></div>)
      }
      <button onClick={() => handleClick()}>change-color</button>
    </div>
  );
}

export default App;
