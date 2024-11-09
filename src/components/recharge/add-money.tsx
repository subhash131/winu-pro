import React from "react";

const AddMoney = ({
  setValue,
}: {
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const increment = (e.target as HTMLDivElement).getAttribute(
      "data-increment"
    );
    if (!increment) return;
    setValue((prev) => prev + Number(increment));
  };
  return (
    <div className="flex gap-4" onClick={handleClick}>
      <button
        className="bg-white px-4 py-1 rounded-lg text-black font-semibold"
        data-increment={250}
      >
        +250
      </button>
      <button
        className="bg-white px-4 py-1 rounded-lg text-black font-semibold"
        data-increment={500}
      >
        +500
      </button>
      <button
        className="bg-white px-4 py-1 rounded-lg text-black font-semibold"
        data-increment={1000}
      >
        +1000
      </button>
    </div>
  );
};

export default AddMoney;
