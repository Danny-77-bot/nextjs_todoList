import React from 'react'
import DeleteList from './DeleteList'
import { FaEdit } from 'react-icons/fa';
import Link from 'next/link';

async function getTopics() {
  try {
    const res = await fetch('http://localhost:3000/api/topics', { cache: "no-store" });

    // Check if the response is successful
    if (!res.ok) {
      throw new Error(`Failed to fetch topics: ${res.statusText}`);
    }

    // Parse the response data
    const topics = await res.json();

    // Return the topics array
    return topics; // Return the array directly
  } catch (error) {
    console.error("Error fetching topics:", error.message);
    return []; // Return an empty array on error
  }
}

export default async function TopicsList() {
  const topics = await getTopics(); // Directly get the array

  return (
    <div>
      {topics.map((topic) => (
        <div key={topic._id} className='flex items-start justify-between mb-4'>
          <div>
            <h2 className="font-bold text-xl">{topic.title}</h2>
            <div className="text-gray-600">{topic.description}</div>
          </div>
          <div className='flex gap-4'>
            <DeleteList id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <FaEdit className="text-blue-500 cursor-pointer" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

