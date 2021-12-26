
import Checkbox from "./Checkbox";
import Input from "./Input"
import Label from "./Label"
import Select from "./Select"

export const formCommonStyle = "w-full lg:w-2/4 border-gray-300 rounded-md"

const Form = () => {
    return (
        <form>
            <div className="mb-4">
                <Label title={"full name"}/>
                <Input inputType={"text"}/>
            </div>
            <div className="mb-4">
                <Label title={"Email address"}/>
                <Input inputType={"email"} />
            </div>
            <div className="mb-4">
                <Label title={"Photo"}/>
                <div className="flex space-x-4 items-center">                    
                    <div className="w-12 overflow-hidden border border-solid border-gray-400 rounded-full">
                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <button className="px-2 py-1 border border-solid border-gray-400 rounded-md hover:bg-gray-100">charge</button>
                </div>
            </div>  
            <div className="mb-4">
                <Label title={"Cover Photo"}/>
                <div className="flex flex-col justify-center items-center w-full lg:w-2/4 p-4 border-dashed border-gray-300 border-2">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLsinejoin="round"></path>
                    </svg>                  
                    <label className="">
                         <span><b className="cursor-pointer text-sky-700">upload file</b> or drag and drop</span>
                         <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                </div>
            </div>          
            <div className="mb-4">
                <Label title={"When is your event?"}/>
                <Input inputType={"date"}/>
            </div>
            <div className="mb-4">
                <Label title={"What type of event is it?"}/>
                <Select />
            </div>            
            <div className="mb-4">
                <Label title={"Additional details"}/>
                <Input inputType={"textarea"}/>
            </div>  
            <div className="mb-4">
                <Label title={"Push Notifications"}/>
                <ul>
                    <li>
                        <label htmlFor="radio1">
                            <input type='radio' id='radio1' name="radioSelect" checked/>{' '} select1
                        </label>
                    </li>
                    <li>
                        <label htmlFor="radio2">
                            <input type='radio' id='radio2' name="radioSelect"/>{' '} select1
                        </label>
                    </li>                  
                </ul>
            </div>              
            <div className="mb-4">
                <label>
                    <Checkbox /><span className="ml-2 align-middle">Email me news and special offers</span> 
                </label>
            </div> 

            <button className="mt-2 p-2 rounded-md bg-indigo-700 text-white">submit</button>                                                                 
        </form>
    );
};

export default Form;