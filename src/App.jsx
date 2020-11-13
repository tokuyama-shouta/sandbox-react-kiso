import React, { useState } from 'react'
import ColorfulMessage from './components/ColofulMessage';


const App = () => {
  const onClickCountUp = () => {
    setNum(num +1);
  };
  const [num, setNum] = useState(0);
  return(
    <>
      <h1>こんにちは！</h1>
      <ColorfulMessage message={"よ！"}/>
      <ColorfulMessage message={"よ！"}/>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  )
}

export default App 