import { connectionDB } from "@/libs/connectDB";
import Topic from "@/models/topic";

import { NextResponse } from "next/server";

export async function POST(request) {
    try {
      const { title, description } = await request.json();
      await connectionDB();
  
      // Create the new topic in the database
      await Topic.create({
        title,
        description
      });
  
      return NextResponse.json({ message: "Topic Created" }, { status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Failed to create topic", error: error.message }, { status: 500 });
    }
  }
  
  export async function GET() {
    try {
      await connectionDB();
      const topics = await Topic.find();
      return NextResponse.json(topics);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Failed to retrieve topics", error: error.message }, { status: 500 });
    }
  }



