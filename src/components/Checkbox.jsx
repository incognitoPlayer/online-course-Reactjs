import { useState } from "react"

const Checkbox = (props) => {
    const [check, setCheck] = useState(false)
    return (
        <div className="block">
            <label className="inline-flex items-center">
                <input type="checkbox" className="bg-[#FAFAFA] form-checkbox h-[20px] w-[20px] focus:ring-0 focus:ring-offset-0 rounded-md border-[#d8d8d8] text-primaryColor" onChange={() => setCheck(!check)} />
                <span className="ml-2 text-[13px] font-medium">{props.title}</span>
            </label>
        </div>
    )
}

export default Checkbox
