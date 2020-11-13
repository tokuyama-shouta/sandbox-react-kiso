
import React, { useEffect, useState } from 'react'
import ColorfulMessage from './components/ColofulMessage';


const App = () => {

  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num +1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  }

  useEffect(() => {

    if(num % 3 === 0){
      faceShowFlag || setFaceShowFlag(true);
    }else{
      faceShowFlag && setFaceShowFlag(false)
    }
    // eslint-disable-next-line
  }, [num])

  

  return(
    <>
      <h1>こんにちは！</h1>
      <ColorfulMessage message={"よ！"}/>
      <ColorfulMessage message={"よ！"}/>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>（ ^ω^ ）</p>}
      
    </>
  )
}

export default App 