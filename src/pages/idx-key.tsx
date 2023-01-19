import React, { useState } from 'react';
import { Spin } from 'antd';

function App() {
  const [initMap, setInitMap] = useState([1,2,3,4]);
  const [spin, setSpin] = useState(false);
  const handleClick = () => {
    setSpin(true); //变化部分
    var spanEle = document.getElementsByTagName('span');
    Array.from(spanEle).map(it => it.style.color = 'red')
    setSpin(false); //变化部分
  }
  
  return (
    <div className="App" id="app">
      <Spin spinning={spin}></Spin>
      {
        initMap.map((it,index) => <div key={Math.random()}><span>{it}-{Math.random()}</span></div>)
      }
      <button onClick={() => handleClick()}>d</button>
    </div>
  );
}

export default App;
