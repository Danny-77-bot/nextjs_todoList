'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddTopic() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter(); // To navigate back to the home page

  async function createLists(e) {
    e.preventDefault(); // Prevent form submission reload

    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (!res.ok) {
        throw new Error('Failed to create the topic');
      }

      // Navigate back to the home page
      router.push('/');
    } catch (error) {
      console.error('Error creating topic:', error.message);
    }
  }

  return (
    <div className="p-4">
      <form
        onSubmit={createLists}
        className="flex flex-col items-start gap-4"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          className="p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition duration-200"
          placeholder="Add title"
          required
        />

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
          Add List
        </button>
      </form>
    </div>
  );
}
