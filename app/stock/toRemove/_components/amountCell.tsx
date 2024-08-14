import React, { useState } from "react";

const AmountComponent = () => {
  const [amount, setAmount] = useState(0);

  const incrementAmount = () => {
    setAmount(amount + 1);
  };

  const decrementAmount = () => {
    if (amount == 0) return;
    setAmount(amount - 1);
  };

  return (
    <div className="w-full inline-flex items-center">
      <button onClick={decrementAmount} className="px-2 py-1 bg-gray-200">
        -
      </button>
      <div className="font-medium mx-2">{amount}</div>
      <button onClick={incrementAmount} className="px-2 py-1 bg-gray-200">
        +
      </button>
    </div>
  );
};

export default AmountComponent;
