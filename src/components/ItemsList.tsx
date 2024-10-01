import { Items, ReactSetState } from '../types/utils'
import Button from './Button'

type ItemsList={
   items:Items[];
   setItems: ReactSetState<Items[]>
}

const ItemsList = ({items,setItems}:ItemsList) => {
    const handleDelete=(id: string)=>{
    
        setItems((prev)=>prev.filter(data=>data.id !==id))
    
      }
  return  items.map((data)=>(<div key={data.id} className="mt-4 bg-white shadow-md rounded p-4 w-full max-w-md flex items-center justify-between">
          
        <p className="text-lg font-medium text-gray-800">{data.title}</p>
       {/* delete button */}
        <Button classname='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
         onClick={()=>handleDelete(data.id)}>Delete</Button>
      </div>))
  
}

export default ItemsList