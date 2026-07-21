import {useBuilder} from "../../../context/Builder.context.ts"


export default function Banner() {
  const {data} = useBuilder()
  console.log(data)
  return (
    
   <div className="w-full py-2.5 font-medium text-sm text-green-900 text-center bg-linear-to-r from-[#32c245] to-[#FDFEFF]">
            <p><span className="px-3 py-1 rounded-lg text-white bg-green-600 mr-2">New</span>AI Website Builder</p>
        </div>
  )
}
