'use client';

import EditForm from '@/app/components/EditForm';
import React from 'react';
import { useParams } from 'next/navigation'; // For accessing route parameters in Next.js 13

export default function EditTopic() {
  const params = useParams(); // Access the dynamic route parameters
  const { id } = params; // Extract the `id`

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Topic</h1>
      {/* Pass the id to the EditForm component */}
      <EditForm id={id} />
    </div>
  );
}
