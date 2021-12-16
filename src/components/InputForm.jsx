const InputForm = (props) => {
  return (
    <>
      <label
        className="block text-colorHeading 2xl:text-sm lg:text-xs font-medium lg:mb-1 2xl:mb-2"
        htmlFor="username"
      >
        {props.title}
      </label>
      <input
        className="bg-[#FAFAFA] border rounded-lg 2xl:text-sm lg:text-xs font-regular w-full lg:h-[45px] h-[48px] py-2 px-3 text-colorHeading leading-tight focus:outline-none focus:shadow-outline focus:border-primaryColor border-[#e4e4e4] focus:ring-0 mb-4"
        type={props.type}
        placeholder={props.desc}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        required
      />
    </>
  );
};
export default InputForm;
