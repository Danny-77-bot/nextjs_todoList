import { connectionDB } from "@/libs/connectDB";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, context) {
  try {
    // Destructure params asynchronously
    const { params } = context;
    const id = params?.id; // Safely access id

    // Parse request body
    const { newTitle: title, newDescription: description } = await request.json();

    // Establish database connection
    await connectionDB();

    // Perform the update in the database
    const updatedTopic = await Topic.findByIdAndUpdate(
      id,
      { title, description },
      { new: true } // Return the updated document
    );

    // Check if the topic was found and updated
    if (!updatedTopic) {
      return NextResponse.json({ message: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Topic updated successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update topic", error: error.message },
      { status: 500 }
    );
  }
}
