import connect from "@/utils/db";
import { Post } from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    const {id} = params;
    try {
        await connect();
        const post = await Post.findOne({id})
        
        return new NextResponse(JSON.stringify(post), { status: 200 })
    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }
}
export const DELETE = async (request, {params}) => {
    const {id} = params;
    try {
        await connect();
        const post = await Post.findByIdAndDelete({_id: id})
        
        return new NextResponse("post has been deleted", { status: 200 })
    } catch (error) {
        return new NextResponse(error, { status: 500 })
    }
}