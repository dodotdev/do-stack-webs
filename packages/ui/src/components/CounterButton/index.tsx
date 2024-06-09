"use client";
import { useState } from "react";

import { Button } from "../ui/button";

export function CounterButton(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        background: `rgba(0,0,0,0.05)`,
        borderRadius: `8px`,
        padding: "1.5rem",
        fontWeight: 500,
      }}
    >
      <p style={{ margin: "0 0 1.5rem 0" }}>
        This component is from{" "}
        <code className="px-2 py-1 rounded-md bg-gray-300 bg-opacity-40">
          @repo/ui
        </code>
      </p>
      <div>
        <Button
          onClick={() => {
            setCount((c) => c + 1);
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white 
                    font-bold py-2 px-4 rounded-md"
          type="button"
        >
          Count: {count}
        </Button>
      </div>
    </div>
  );
}
