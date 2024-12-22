import { connectionDB } from "@/libs/connectDB";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT (request,{params}) {
     const {id}=params;
     const {newTitle:title,newDescription:description}=request.json();
    await connectionDB();
    await Topic.findByIdAndUpdate(id,{title,description});
    return NextResponse.json({message:"Topic updated successfully"},{status:200});

}  