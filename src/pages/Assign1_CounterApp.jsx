import React, { useState } from 'react'

const Assign1_CounterApp = () => {
    const [count, setCount] = useState(10);


    const functionOne = () => {
        setCount(count + 1);
        // console.log({count + 1});
    }

    return (<>
        <h2>The count is : ${count}</h2>
        <button onClick={functionOne}>Click : {count}</button>
    </>
    );
}

export default Assign1_CounterApp
