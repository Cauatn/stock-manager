import React, { useEffect, useState } from "react";

type AmountComponentProps = {
  getValue: () => number;
  row: { index: number };
  column: { id: string };
  table: {
    options: {
      meta?: {
        updateData: (rowIndex: number, columnId: string, value: number) => void;
      };
    };
  };
};
const AmountComponent = ({
  getValue,
  row,
  column,
  table,
}: AmountComponentProps) => {
  const initialValue = getValue();
  const [amount, setAmount] = useState(initialValue);

  const updateAmout = () => {
    table.options.meta?.updateData(row.index, column.id, amount);
  };

  useEffect(() => {
    updateAmout();
  }, [amount]);

  const incrementAmount = () => {
    setAmount(amount + 1);
  };

  const decrementAmount = () => {
    if (amount === 0) return;
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

export default React.memo(AmountComponent);
