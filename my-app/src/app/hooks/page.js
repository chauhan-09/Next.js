"use client";
import { useEffect , useState} from 'react';

const Hooks = () => {
    const [count,setCount] = useState(0);

    useEffect(() => {   //runs atleast once when the component is mounted and also runs when the count state changes
        
        console.log("the current count is: ", count);
        return () => {                //cleanup function that runs when the component is unmounted
          console.log("unmounted component");
        }
       
    }, [count]); //dependency array that tells useEffect to run only when the count state changes

    const increment = () => {
        setCount(count + 1);
    }   

    const decrement = () => {
        setCount(count - 1);
    }   

    const reset = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Hooks;

