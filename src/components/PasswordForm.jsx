import iconEyeOpen from "../assets/eye-open.svg";
import iconEyeClose from "../assets/eye-close.svg";

const PasswordForm = (props) => {
  return (
    <div>
      <label
        className="block text-colorHeading 2xl:text-sm lg:text-xs font-medium mb-2"
        htmlFor="password"
      >
        {props.title}
      </label>
      <div className="relative">
        <input
          className="bg-[#FAFAFA] border rounded-lg lg:text-xs 2xl:text-[15px] font-regular w-full h-[45px] py-2 px-3 text-colorHeading leading-tight focus:outline-none focus:shadow-outline focus:border-primaryColor border-[#e4e4e4] focus:ring-0 mb-4 "
          type={props.show ? "" : "password"}
          placeholder={props.desc}
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          minLength={props.min}
          required
        />
        <img
          className="absolute top-[13px] right-[20px]"
          src={props.show ? iconEyeOpen : iconEyeClose}
          onClick={props.onClick}
          alt=""
        />
      </div>
    </div>
  );
};

export default PasswordForm;
