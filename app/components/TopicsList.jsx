import React from 'react'
import DeleteList from './DeleteList'
import { FaEdit } from 'react-icons/fa';
import Link from 'next/link';
export default function TopicsList() {
  return (
    <div className='flex items-start justify-between' >
      <div>
      <h2>Topic Title</h2> 
       <div>
        topic description
       </div>
      </div>
          <div className='flex gap-4'>
          <DeleteList/>
           <Link href="/editTopic/:id"> <FaEdit/></Link>
          </div>
    </div>
  )
}
