import { ReactSetState } from "../types/utils";

type Input={
    type:"text"|"color"|"checkbox"
    inputValue:string;
    setInputValue: ReactSetState<string>

}
const Input = ({type,inputValue,setInputValue}:Input) => {
  return (

    <input
              type={type}
              value={inputValue}
              placeholder="Enter text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(event)=>setInputValue(event.target.value)}
          /> 
  )
}

export default Input