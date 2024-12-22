'use client';
import React from 'react';
import { FaTrash } from 'react-icons/fa'; // Font Awesome
import { useRouter } from 'next/navigation'; // For refreshing the page or navigating after deletion

export default function DeleteList({ id }) {
  console.log(id)
  const router = useRouter(); // Initialize router for navigation or refresh

  async function DeleteItem() {
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Failed to delete the item');
      }

      // Optionally refresh the page or navigate after successful deletion
      router.refresh(); // Refresh the current page
    } catch (error) {
      console.error('Error deleting item:', error.message);
    }
  }

  return (
    <button onClick={DeleteItem} className="text-red-500 hover:text-red-700">
      <FaTrash />
    </button>
  );
}
