import React from "react";

const InputField = ({
  field,
  setField,
  name,
  inputClassName,
  wrapperClassName,
  fieldClassName,
  textSize = "text-sm",
}: {
  name: string;
  field: string;
  setField: React.Dispatch<React.SetStateAction<string>>;
  wrapperClassName?: string;
  inputClassName?: string;
  fieldClassName?: string;
  textSize?: string;
}) => {
  return (
    <div
      className={`text-white relative group h-10 items-end flex ${wrapperClassName}`}
    >
      <span
        className={`${textSize}  absolute transition-all ${
          field ? "top-0" : " top-5 group-hover:top-0"
        } ${fieldClassName}`}
      >
        {name}
      </span>
      <input
        className={`border-b bg-transparent border-[#868686] outline-none ${textSize} ${inputClassName}`}
        autoFocus
        onChange={(e) => setField(e.target.value)}
        name={field}
        value={field}
      />
    </div>
  );
};

export default InputField;
