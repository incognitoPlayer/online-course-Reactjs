import { useState } from "react";

const Checkbox = (props) => {
  return (
    <div className="block items-center lg:mt-[5px]">
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          className={`bg-[#FAFAFA] ${props.inputStyle} form-checkbox lg:h-[16px] lg:w-[16px] 2xl:h-[20px] 2xl:w-[20px] focus:ring-0 focus:ring-offset-0 rounded-md border-[#d8d8d8] text-primaryColor`}
          value={props.value}
          name={props.name}
          onChange={props.onChange}
        />
        <span className={`ml-2 ${props.titleStyle}`}>{props.title}</span>
      </label>
    </div>
  );
};

export default Checkbox;
