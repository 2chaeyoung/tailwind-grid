import {formCommonStyle} from "./Form"

const Select = () => {
    return (
        <>
            <select className={`${formCommonStyle}`}>
                <option>event1</option>
                <option>event2</option>
                <option>event3</option>
            </select>            
        </>
    );
};

export default Select;