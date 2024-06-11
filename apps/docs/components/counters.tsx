// Example from https://beta.reactjs.org/learn

import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md mt-2"
        onClick={handleClick}
      >
        Clicked {count} times
      </button>
    </div>
  );
}

export default function MyApp() {
  return <MyButton />;
}
