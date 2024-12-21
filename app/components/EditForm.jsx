import React from 'react'

export default function EditForm() {
  return (
    <div>
         <form
       
       className="flex flex-col items-start gap-4"
     >
      <input
 type="text"
 name="title"
 className="p-3  border border-gray-600 rounded-lg bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition duration-200"
 placeholder="Add title"
 required
/>

<input
 type="text"
 name="description"
 className="p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition duration-200"
 placeholder="Add description"
 required
/>

       <button
         type="submit"
         className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
       >
        Update list
       </button>
     </form>
    </div>
  )
}
