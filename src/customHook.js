import { useState } from "react";

export function useCounterState() {
  const [count, setCount] = useState(0);

  const handleSubmit = () => {
    setCount(count + 1);
    console.log(count);
  };

  return {
    count,
    handleSubmit
  };
}