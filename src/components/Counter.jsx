import React, { useState } from 'react';

const Counter = function () {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState('Текст на инпут')
    function inc() {
        setCount(count + 1)
      }
      function dec() {
        setCount(count - 1)
      }
     
    return (
        <div>
            <h1>{count}</h1>
            <h2>{value}</h2>
            <button onClick={inc}>плюс</button>
            <button onClick={dec}>минус</button>
            <input
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
            />
        </div>

    )
}
export default Counter;