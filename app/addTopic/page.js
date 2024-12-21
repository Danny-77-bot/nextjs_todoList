import React from 'react'

export default function  AddTopic() {
  return (
    <div className=''>
        <div className='flex flex-col items-start gap-4'>
          <input className='border bg-slate-200' placeholder='add title'/>
          <input className='border bg-slate-200 ' placeholder='add description'/>
            <button className='bg-blue-600 text-white p-2'>Add List</button>
        </div>
    </div>
  )
}
