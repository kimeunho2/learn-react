import React, { useState } from 'react';
/** 
 * 1. +1 버튼을 클릭할 때 마다 텍스트가 1씩 오른다.   
 * 2. -1버튼을 클릭할 때, 텍스트의 숫자는 최대 10까지만 오를 수 밖에 없다.
 * 3. -1 버튼을 클릭할 떄 마다 현재 텍스트에서 1씩 깍인다.
 * 4.  -1 버튼을 클릭할 때 최소 숫자는 0까지만 내려간다.
 * 프롭스로 몇 씩 증가할지 받아와서, 클릭 시 그 값을 증가하거나 감소하게 하기 */ 








const Count = ({count}) => {

    const [counter, setCounter] = useState(0)

    const increase = () => {
        if (counter >= 10) return

        setCounter(counter + count);
        console.log(typeof (counter + count))
   }

    const decrease = () => {
        if (counter <= 0) return

        setCounter(counter - count);
        console.log(typeof (counter - count))
    }
    
  
    return (
    <div>
        <h2>{counter}</h2>
        <button type='button' onClick={increase}>+2</button>
        <button type='button' onClick={decrease}>-2</button>
        </div>

  )
}

export default Count