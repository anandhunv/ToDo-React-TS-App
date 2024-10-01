import { useState } from 'react';
import './App.css';
import {ImageHeader} from './components/ImageHeader';
import Input from './components/Input';
import Button from './components/Button';
import ItemsList from './components/ItemsList';
import { type Items } from './types/utils';



function App() {
  const [items, setItems] = useState<Items[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()

    if(inputValue.length===0){
      return alert("write anything")
    }else{
  
   setItems((prev)=>[...prev,{title:inputValue,id:Date.now().toString()}])
   setInputValue("")
    }
  }
 
 
    return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <ImageHeader />
      <div className="mt-8 w-full max-w-md" >
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} >
          
          <div className="mb-4">
            
            {/* input */}
            
            <Input type='text' inputValue={inputValue} setInputValue={setInputValue}/>
          </div>
          <div className="flex items-center justify-between">
           {/* Button */}
          
           <Button  classname='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Add</Button>

          </div>
        </form>
      </div>

         {/* Delete Tag Section */}
         
        

      <ItemsList items={items} setItems={setItems} />

    </div>
  );
}

export default App;

 