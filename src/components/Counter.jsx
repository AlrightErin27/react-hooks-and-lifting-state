//Imports//
import { useState, useEffect } from "react";

export default function Counter() {
  //setState hook returns state value &
  //a function to set the value
  const [count, setCount] = useState(1);
  //example of having an object//
  const [user, setUser] = useState({ name: "Polly" });

  //Use useEffect hooks//
  //happens after every render...
  useEffect(() => {
    console.log(count);

    //...return call is invoked on unmount like componentWillUnmount
    return () => {
      console.log("on every unmount");
    };
  });

  //Event Handlers//
  const handleIncreaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello {user.name} </h1>
      <h2>there are {count} parrots</h2>
      <button onClick={handleIncreaseCount} class="button">
        🦜
      </button>
    </div>
  );
}
