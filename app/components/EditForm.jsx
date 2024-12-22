'use client';

import React, { useState, useEffect } from 'react';

export default function EditForm({ id }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch the current data for the topic
  useEffect(() => {
    async function fetchTopic() {
      try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`);
        if (res.ok) {
          const topic = await res.json();
          setTitle(topic.title);
          setDescription(topic.description);
        } else {
          console.error('Failed to fetch topic');
        }
      } catch (error) {
        console.error('Error fetching topic:', error.message);
      }
    }
    if (id) fetchTopic();
  }, [id]);

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        alert('Topic updated successfully!');
        window.location.href = '/'; // Redirect to the home page
      } else {
        const errorData = await res.json();
        alert(`Failed to update topic: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error updating topic:', error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-4"
      >
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 border border-gray-600 rounded-lg bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition duration-200"
          placeholder="Edit title"
          required
        />

        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition duration-200"
          placeholder="Edit description"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Update List'}
        </button>
      </form>
    </div>
  );
}
