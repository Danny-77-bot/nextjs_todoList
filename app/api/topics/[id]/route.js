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

export async function GET(request,{ params }) {
    try {
      // Destructure and safely access the ID from params
    //   const { params } = context;
      const id = params;
  
      // Validate ID
      if (!id) {
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
      }
  
      // Connect to the database
      await connectionDB();
  
      // Find the ToDo item by ID
      const todo = await Topic.findById(id);
  
      // Handle not found case
      if (!todo) {
        return NextResponse.json({ message: "ToDo not found" }, { status: 404 });
      }
  
      // Return the ToDo item
      return NextResponse.json(todo, { status: 200 });
    } catch (error) {
      // Handle errors
      return NextResponse.json(
        { message: "Failed to fetch ToDo", error: error.message },
        { status: 500 }
      );
    }
  }

  export async function DELETE(request, { params }) {
    const { id } = params;
  
    try {
      // Connect to the database
      await connectionDB();
  
      // Find and delete the topic by ID
      const deletedTopic = await Topic.findByIdAndDelete(id);
  
      if (!deletedTopic) {
        return NextResponse.json({ message: "Topic not found" }, { status: 404 });
      }
  
      // Respond with success
      return NextResponse.json({ message: "Topic deleted successfully" }, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { message: "Failed to delete the topic", error: error.message },
        { status: 500 }
      );
    }
  }
