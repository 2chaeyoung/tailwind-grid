import {formCommonStyle} from "./Form"

const Input = ({ title,inputType }) => {
    const isInput = inputType !== "textarea"

    return (
        <div className="mb-4">

            {isInput ?
                <input type={inputType} className={`${formCommonStyle} lg:w-2/4`}/>
                : <textarea className={`${formCommonStyle} lg:w-2/4`}/>
            }
        </div>
    );
};

export default Input;